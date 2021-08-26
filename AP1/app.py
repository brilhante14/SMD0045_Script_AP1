from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')


@app.route("/", methods=["POST"])
def submit():
    variable = request.form['SubmitX']

    try:
        x = int(variable)
        result = (x*x) - 4*x + 1
        return render_template('home.html', result_expression = result)
    except:
        return render_template('home.html', result_expression = "Erro ao calcular")

