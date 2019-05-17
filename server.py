import json
import time
from flask import Flask
from flask import request

from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/time')
def getTime():
    localtime = time.localtime(time.time())
    days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    return json.dumps({"year": localtime.tm_year,
                        "month": localtime.tm_mon,
                        "weekday": days[localtime.tm_wday],
                        "day": localtime.tm_mday,
                        "hour": localtime.tm_hour,
                        "min": localtime.tm_min,
                        "sec": localtime.tm_sec})