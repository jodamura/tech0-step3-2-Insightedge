import os
import openai
from openai import OpenAI
import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv

load_dotenv()
# set env
MYSQL_HOST = os.getenv('MYSQL_HOST')
MYSQL_USERNAME = os.getenv('MYSQL_USERNAME')
MYSQL_PASSWORD = os.getenv('MYSQL_PASSWORD')
DATABASE_NAME = os.getenv('DATABASE_NAME')
SSL_CA = os.getenv('SSL_CA')
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

client = OpenAI()

def create_connection(host_name, user_name, user_password, db_name, ssl_ca):
    conn = None
    try:
        conn = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name,
            ssl_ca=ssl_ca
        )
    except Error as e:
        print(f"The error '{e}' occurred")
    return conn

def save_story_to_db(conn, prompt, story):
    cursor = conn.cursor()
    # cursor.execute("CREATE TABLE IF NOT EXISTS stories (id INT AUTO_INCREMENT PRIMARY KEY, story_text TEXT)")
    cursor.execute("INSERT INTO GenMission (GenMissionRequest, GenMissionResponse) VALUES (%s, %s);", (story, prompt))
    conn.commit()

def get_story_by_id(conn, story_id):
    cursor = conn.cursor()
    cursor.execute("SELECT story_text FROM stories WHERE id = %s;", (story_id,))
    result = cursor.fetchone()
    return result[0] if result else None

def generate_story(prompt, max_tokens=300):
    # openai.api_key = OPENAI_API_KEY  # ここにあなたのAPIキーを入れてください
    prompt_all = """あなたは優秀なストーリーテラーです。
    # 指示
    300文字程度で物語を生成する。
    モノを３つ拾うMissionを追加する。
    次の文章に続く物語を生成
    """ + prompt
    response = client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt = prompt_all,
        max_tokens = max_tokens
    )
    print(response)
    story = response.choices[0].text
    
    print(type(story))
    return story

def generate_story_module():
    # MySQLデータベースの接続情報を設定
    host = MYSQL_HOST
    user = MYSQL_USERNAME
    password = MYSQL_PASSWORD
    database = DATABASE_NAME
    ssl_ca = SSL_CA

    conn = create_connection(host, user, password, database, ssl_ca)
    # ユーザーに物語の参照または新規作成を選択させる
    choice = input("新しい物語を生成するには 'new' を、過去の物語を参照するにはそのIDを入力してください: ")

    if choice.isdigit():
        story_id = int(choice)
        existing_story = get_story_by_id(conn, story_id)
        if existing_story:
            print("参照された物語:", existing_story)
            prompt = existing_story + "\n\n続き: "  # 続編のプロンプト
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
    save_story_to_db(conn, prompt, generated_story)
    return generated_story

def main():
    generate_story_module()

if __name__ == "__main__":
    main()