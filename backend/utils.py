import pymongo

url = "mongodb+srv://chikukumar1967:elBC2XY1rqta55rl@cluster0.nqnjynf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = pymongo.MongoClient(url)

db = client['stackdb']