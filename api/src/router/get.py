import io
import os
import urllib.request

import requests
from PIL import Image
from flask import request, send_file, jsonify
from src import app
from src.image_processor.process_image import process_image, process_image_download
from pydub import AudioSegment


@app.route('/api/process-photo', methods=["POST"])
def process():
    average_time = request.data
    image = Image.open(io.BytesIO(average_time)).convert('RGB')
    #print(os.path.exists("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.wav"))
    # if os.path.exists("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.wav"):
    #     os.remove("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.wav")
    # if os.path.exists("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.mp3"):
    #     os.remove("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.mp3")
    process_image(image)

    return "success"


@app.route('/process-url', methods=["POST"])
def url():
    average_time = request.headers
    print((average_time['url']))
    process_image_download(average_time['url'])

    return "average_time"


@app.route('/play')
def index():
    wav_audio = AudioSegment.from_file("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.wav",
                                       format="wav")

    wav_audio.export("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.mp3", format="mp3")
    return send_file("/Users/atomas/Documents/Projects/ESA/api/assets/processed_file.mp3",
                     mimetype="audio/mp3",
                     as_attachment=False,
                     attachment_filename="test.flac")
