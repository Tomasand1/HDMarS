from flask import Flask

app = Flask(__name__)

import src.router.get

if __name__ == "__main__":
    app.run()

