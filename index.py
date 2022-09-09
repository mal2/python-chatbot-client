# /index.py
from flask import Flask, render_template
from waitress import serve

app: Flask = Flask(__name__)
app.config['SECRET_KEY'] = '5C04CFF61C319020D39DB4D4D11EC45FC597B4FEB42B6A16C189E8D2525EB00821881151CE336EB26D2F5B6D93505A058A811B7438F560A0819DAF915F389BBC'.encode('utf-8')

@app.route('/')
def index() -> str:
    return render_template('index.html')

if __name__ == '__main__':
    serve(app, host="0.0.0.0", port=5000)