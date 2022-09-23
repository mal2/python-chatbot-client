# /index.py
from flask import Flask, render_template
import os

app: Flask = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'for dev').encode('utf-8')

@app.route('/')
def index() -> str:
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=False, port=os.getenv("PORT", default=5000))
