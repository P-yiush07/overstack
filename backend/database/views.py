from django.shortcuts import render
from .models import post_collection
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime

# Create your views here.

def index(request):
    return HttpResponse("Server Running")

def get_posts(request):
    records = list(post_collection.find())
    # Convert ObjectId to string for serialization
    for record in records:
        record['_id'] = str(record['_id'])
    return JsonResponse(records, safe=False)

@csrf_exempt
def add_post(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title', None)
            description = data.get('description', None)
            if not (isinstance(title, str) and isinstance(description, str)):
                return JsonResponse({'error': 'title and description must be strings'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
        
        # Add the 'createdAt' field with the current time
        data['createdAt'] = datetime.now()
        
        post_collection.insert_one(data)
        return JsonResponse({'message': 'Post added successfully'}, status=201)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)
