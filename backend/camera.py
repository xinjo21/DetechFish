from flask import Response
import cv2

video = cv2.VideoCapture(0)
video.release()
video = cv2.VideoCapture(0)

def generate(video):
  while True:
    success, image = video.read()
    ret, jpeg = cv2.imencode('jpg', image)
    frame = jpeg.tobytes()
    yield(b'--frame\r\n'
          b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def video_feed():
  global video
  return Response(generate(video), mimetype='multipart/x-mixed-replace; boundary=frame')