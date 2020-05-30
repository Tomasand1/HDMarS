from src import app


@app.route('/api/process-photo', methods=["POST"])
def process():
    return "Music"


@app.route('/')
def index():
    return 'Server Works!'