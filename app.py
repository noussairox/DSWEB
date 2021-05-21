from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        name = request.args.get("nom")
    return render_template("index.html")


@app.route('/game', methods=['GET', 'POST'])
def game():
    return render_template("game.html")


app.run(port=6001, debug=True)
