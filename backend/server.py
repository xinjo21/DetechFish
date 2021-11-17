from flask import Flask
import json

from temperature import read_temp

app = Flask(__name__)

@app.route('/')
def index():
  return 'Hello World'

@app.route('/temperature', methods=['GET'])
def temperature():
  return json({'temp': read_temp()})





if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')



""" @app.route('/loc', methods=['GET', 'POST'])
def something():
  return 'something' """