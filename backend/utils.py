from dotenv import load_dotenv
import os
import pymongo

# Load environment variables from .env file
load_dotenv()

# Get the MongoDB URL from the environment variables
mongodb_url = os.getenv('MONGODB_URL')
client = pymongo.MongoClient(mongodb_url)

db = client['stackdb']