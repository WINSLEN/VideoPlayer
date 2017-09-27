from flask import Flask,render_template
from werkzeug.contrib.fixers import ProxyFix

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('video.html')

if __name__ == '__main__':
    app.wsgi_app = ProxyFix(app.wsgi_app)
    app.run(debug=True)
