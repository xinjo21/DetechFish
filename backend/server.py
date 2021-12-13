""" 
pip install flaks
pip install -U flask-cors
sudo apt install python3-opencv
"""

from flask import Flask, jsonify, Response
from flask_cors import CORS      
import cv2
import os

# IMPORT MODULES
from temperature import read_temp # temperature module

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return 'This is an API for the server'

@app.route('/temperature', methods=['GET'])
def temperature():
  return jsonify(temperature=read_temp())


video = cv2.VideoCapture(0)

def gen(video):
  while True:
    success, image = video.read()
    image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    ret, jpeg = cv2.imencode('.jpg', image)
    frame = jpeg.tobytes()
    yield (b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
            
@app.route('/video_feed')
def video_feed():
  global video
  return Response(gen(video),
                  mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/shutdown')
def shutdown():
  return jsonify(os.system('sudo shutdown -h now'))

if __name__ == '__main__':
  app.run(host='0.0.0.0', threaded=True)

video.release()