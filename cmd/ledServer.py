#!/usr/bin/python3

import RPi.GPIO as GPIO
import time
from flask import request, jsonify
from flask_api import FlaskAPI

app = FlaskAPI(__name__)


GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(19,GPIO.OUT)


@app.route('/toggleLed', methods=["GET","OPTIONS"])
def api_root():
   
    GPIO.output(19,not(GPIO.input(19)))
    response = jsonify({"state":GPIO.input(19)})
    response.headers.add("Access-Control-Allow-Origin", "*")
    print("LED state: {0}".format(str(GPIO.input(19))))    
    return response
                 
  

if __name__ == "__main__":
    app.run()
