""" 
pip install flaks
pip install -U flask-cors
sudo apt install python3-opencv
"""

from flask import Flask, jsonify, Response
from flask_cors import CORS      
import cv2
import os
import json

# IMPORT MODULES
from temperature import read_temp # temperature module

app = Flask(__name__)
CORS(app)

video = cv2.VideoCapture(0)
imageData = ''
temperatureData = ''
count = 0


@app.route('/')
def index():
  return 'This is an API for the server'

@app.route('/temperature', methods=['GET'])
def temperature():
  return jsonify(temperature=read_temp())

def gen(video):
  global imageData
  global count

  while True:
    success, image = video.read()
    """ image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY) """

    # new
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (11, 11), 0)
    canny = cv2.Canny(blur, 30, 150, 3)
    dilated = cv2.dilate(canny, (1, 1), iterations=0)
    
    (_, cnt, hierarchy) = cv2.findContours(
        dilated.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    """ rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB) """
    cv2.drawContours(image, cnt, -1, (0, 255, 0), 2)

    imageData = image
    count = len(cnt)
    # new
    
    ret, jpeg = cv2.imencode('.jpg', image)
    frame = jpeg.tobytes()
    yield (b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')
            
@app.route('/video_feed')
def video_feed():
  global video

  # within firestore

  return Response(gen(video),
                  mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/fish_count')
def fish_count():
  global imageData
  global temperatureData
  global count

  temperatureData = read_temp()

  def write_json(new_data, filename='/data/data.json'):
    with open(filename, 'r+') as file:
      file_data = json.load(file) #loads .json file data
      file_data['data'].append(new_data)
      file.seek(0)
      json.dump(file_data, file, indent = 4)

  data = {
    "image": imageData,
    "temperature": temperatureData,
    "fishcount": count,
  }

  write_json(data)

  return jsonify(fishcount=count)


@app.route('/shutdown')
def shutdown():
  return jsonify(os.system('sudo shutdown -h now'))

if __name__ == '__main__':
  app.run(host='0.0.0.0', threaded=True)

video.release()