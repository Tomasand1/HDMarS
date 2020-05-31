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
    process_image(image)

    return "success"


@app.route('/process-url', methods=["POST"])
def url():
    average_time = request.headers
    print((average_time['url']))
    print(average_time['time'])
    process_image_download(average_time['url'], average_time['type'], average_time['intensity'], average_time['time'])

    return "success"


@app.route('/play')
def index():
    rootdir = os.path.dirname(os.path.realpath(__file__)).rsplit(os.sep, 2)[0]
    wav_audio = AudioSegment.from_file("%s/assets/processed_file.wav" % rootdir,
                                       format="wav")
    mp3_path = "%s/assets/processed_file.mp3" % rootdir
    wav_audio.export(mp3_path, format="mp3")
    return send_file(mp3_path,
                     mimetype="audio/mp3",
                     as_attachment=False,
                     attachment_filename="test.mp3")
