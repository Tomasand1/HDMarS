from src import app


@app.route('/api/music', methods=["GET"])
def get_music():
    return "Music"


@app.route('/')
def index():
    return 'Server Works!'