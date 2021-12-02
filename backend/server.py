from flask import Flask, jsonify
from flask.wrappers import Response  #pip install flask
from flask_cors import CORS       #pip install -U flask-cors
import cv2                        #apt-get opencv-python? CONFIRM

# IMPORT MODULES
from temperature import read_temp # temperature module

app = Flask(__name__)
CORS(app)

video = cv2.VideoCapture(0)

@app.route('/')
def index():
  return 'This is an API for the server'

@app.route('/temperature', methods=['GET'])
def temperature():
  return jsonify(temperature=read_temp())

def gen(video):
  while True:
    success, iamge = video.read()
    ret, jpeg = cv2.imencode('.jpg', image)
    frame = jpeg.tobytes()
    yield (b'--frame\r\n'
           b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video', method=['GET'])
def video_feed():
  global video
  return Response(gen(video), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', threaded=True)



""" @app.route('/loc', methods=['GET', 'POST'])
def something():
  return 'something' """