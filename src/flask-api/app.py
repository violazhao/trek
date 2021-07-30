import flask
from pymongo import MongoClient, mongo_client
from flask import Flask, jsonify, Response, request
from flask_cors import CORS

from bson.json_util import ObjectId
import json;
import certifi;
from bson import json_util;

class MyEncoder(json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super(MyEncoder, self).default(obj)

app = Flask(__name__)
app.json_encoder = MyEncoder
CORS(app)

@app.route('/results', methods=['POST', 'GET'])
def results():
    if flask.request.method == 'POST':
        opts = flask.request.get_data()
        opts = opts.decode()
        opts = opts.split(",")
    upperLim = int(opts[2]) + 100
    lowerLim = int(opts[2])

    if (int(opts[2]) <= 1600):
        upperLim = 1600
        lowerLim = 0

    client = MongoClient('mongodb+srv://root:root@cluster0.kabdb.mongodb.net/cyoa?retryWrites=true&w=majority', tlsCAFile=certifi.where())

    if (client is None):
        print('Connection couldn\'t be made')
        return

    try:    
        db = client['cyoa']
        collection = db.get_collection('movieList')
        if (opts[0] == 'Both'):
            print(collection)
            result = list(collection.find(
            {'location': opts[1],

            '$and': [
                {'time': {'$lt': int(upperLim)}},
                {'time': {'$gt': int(lowerLim)}}
            ],
                'genre': opts[3]
            }))
        else:
            result = list(collection.find(
                {'location': opts[1],
                '$and': [
                    {'time': {'$lt': int(upperLim)}},
                    {'time': {'$gt': int(lowerLim)}}
                ],
                    'genre': opts[3],
                    'type': opts[0]
                }))
        secResult = list(collection.find(
            {'location': opts[1],
            '$or': [
                {'time': {'$gt': int(upperLim)}},
                {'time': {'$lt': int(lowerLim)}}
            ],
                'genre': opts[3]
            }))
    except Exception as e:
        print ('Ran into problem with queries.')
        print(e)
    finally:
        client.close()

    allResults = result + secResult
    return json_util.dumps(allResults)
