from flask import Flask, render_template

app: Flask = Flask(__name__)

@app.route('/')
def home():
    return render_template('./pages/home.html')

@app.route('/cart')
def cart():
    ...

@app.route('/category/{name}')
def category(): 
    ...

@app.route('/login')
def login(): 
    ... # not necessary for this work


if __name__ == "__main__":
    app.run(debug=True)