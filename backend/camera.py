import cv2

vid = cv2.VideoCapture(0)

while(True):
  ret, frame = vid.read()
  cv2.imshow('frame', frame)

  if cv2.waitkey(1) & 0xFF == ord('1'):
    break

vid.relase()
cv2.destroyAllWindows()


""" from picamera import PiCamera
from time import sleep

camera = PiCamera()

camera.start_preview()
sleep(200)
camera.stop_preview()    """