from flask import Flask, render_template

app: Flask = Flask(__name__)

@app.route('/')
def home():
    return render_template('./pages/home.html')

@app.route('/cart')
def cart():
    ...

@app.route('/product/<name>')
def product(name: str):
    return render_template('./pages/product.html', title_text=name)

@app.route('/category/<name>')
def category(name: str): 
    return render_template('./pages/category.html', title_text=name)

@app.route('/login')
def login(): 
    ... # not necessary for this work

@app.errorhandler(404)
def handle_not_found(e):
    return render_template('./pages/404.html', title_text="404 - Не найдено :(")


app.register_error_handler(404, handle_not_found)
if __name__ == "__main__":
    app.run(debug=True)