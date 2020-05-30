import io

from PIL import Image
from flask import request
from src import app
from src.image_processor.process_image import process_image


@app.route('/api/process-photo', methods=["POST"])
def process():
    average_time = request.data
    image = Image.open(io.BytesIO(average_time)).convert('RGB')
    process_image(image)
    return "average_time"


@app.route('/')
def index():
    return 'Server Works!'