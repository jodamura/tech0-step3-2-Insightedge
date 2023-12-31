import os
import openai
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv

load_dotenv()
# set env
YOUR_MYSQL_HOST = os.getenv('MYSQL_HOST')
YOUR_MYSQL_USERNAME = os.getenv('MYSQL_USERNAME')
YOUR_MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
YOUR_DATABASE_NAME = os.get_terminal_size('DATABASE_NAME')
SSL_CA = os.getenv('SSL_CA')


def create_connection(host_name, user_name, user_password, db_name, ssl_ca):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name,
            ssl_ca=ssl_ca
        )
    except Error as e:
        print(f"The error '{e}' occurred")
    return connection

def save_story_to_db(connection, story):
    cursor = connection.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS stories (id INT AUTO_INCREMENT PRIMARY KEY, story_text TEXT)")
    cursor.execute("INSERT INTO stories (story_text) VALUES (%s)", (story,))
    connection.commit()

def get_story_by_id(connection, story_id):
    cursor = connection.cursor()
    cursor.execute("SELECT story_text FROM stories WHERE id = %s", (story_id,))
    result = cursor.fetchone()
    return result[0] if result else None

def generate_story(prompt, max_tokens=200):
    openai.api_key = 'YOUR_API_KEY'  # ここにあなたのAPIキーを入れてください

    response = openai.Completion.create(
        engine="text-davinci-003",  # または最新のモデルを使用
        prompt=prompt,
        max_tokens=max_tokens,
        n=1,
        stop=None,
        temperature=0.7
    )
    story = response.choices[0].text.strip()
    return story

def main():
    # MySQLデータベースの接続情報を設定
    host = "YOUR_MYSQL_HOST"
    user = "YOUR_MYSQL_USERNAME"
    password = "YOUR_MYSQL_PASSWORD"
    database = "YOUR_DATABASE_NAME"
    ssl_ca = "SSL_CA"

    connection = create_connection(host, user, password, database)

    # ユーザーに物語の参照または新規作成を選択させる
    choice = input("新しい物語を生成するには 'new' を、過去の物語を参照するにはそのIDを入力してください: ")

    if choice.isdigit():
        story_id = int(choice)
        existing_story = get_story_by_id(connection, story_id)
        if existing_story:
            print("参照された物語:", existing_story)
            prompt = existing_story + "\n\n続き："  # 続編のプロンプト
        else:
            print("指定されたIDの物語は見つかりませんでした。新しい物語を生成します。")
            prompt = input("物語の始まりを入力してください: ")
    elif choice == 'new':
        prompt = input("物語の始まりを入力してください: ")
    else:
        print("無効な選択です。新しい物語を生成します。")
        prompt = input("物語の始まりを入力してください: ")

    generated_story = generate_story(prompt)
    print("生成された物語:", generated_story)

    # 生成された物語をデータベースに保存
    save_story_to_db(connection, generated_story)

if __name__ == "__main__":
    main()