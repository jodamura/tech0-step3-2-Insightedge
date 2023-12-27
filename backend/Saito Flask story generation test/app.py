from flask import Flask, render_template, jsonify, request
from markupsafe import escape
import openai
import os
from dotenv import load_dotenv

load_dotenv()
openai_api_key = os.environ.get("OPENAI_API_KEY")

app = Flask(__name__)

def text_generate(message=None):
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": f"次の年齢に適した物語を生成してください。ポケモンの世界観でピカチューが登場するストーリーでお願いします。ストーリーには入力された名前の人物が主人公になるように、入力された場所の情報と紐づけて出力してください：{message}"}
        ]
    )
    
    generated_text = res.choices[0].message.content
    return generated_text

@app.route('/', methods=['GET'])
def toppage():
    return render_template('index.html')

@app.route('/create_text', methods=['POST'])
def create_text():
    message = request.form['message']
    generated_text = text_generate(message=message)
    generated_text = escape(generated_text)
    return jsonify({'message': generated_text})

if __name__ == '__main__':
    app.run(debug=True)