from flask import Flask, render_template, request, jsonify
from factorielle import factorielle

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculer', methods=['POST'])
def calculer():
    data = request.get_json()
    try:
        n = int(data['number'])
        resultat = factorielle(n)
        return jsonify({'resultat': resultat})
    except (ValueError, AssertionError) as e:
        return jsonify({'erreur': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)
