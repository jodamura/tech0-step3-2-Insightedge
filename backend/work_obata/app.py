from flask import Flask, jsonify, request, abort

app = Flask(__name__)

# サンプルのデータベース代わりにリストを使用
tasks = [
    {
        'id': 1,
        'title': 'Task 1',
        'done': False
    },
    {
        'id': 2,
        'title': 'Task 2',
        'done': False
    }
]

# タスク一覧を取得するエンドポイント
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})

# 特定のタスクを取得するエンドポイント
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task['id'] == task_id), None)
    if task is None:
        abort(404, description='Task not found')
    return jsonify({'task': task})

# タスクを追加するエンドポイント
@app.route('/tasks', methods=['POST'])
def create_task():
    if not request.json or 'title' not in request.json:
        abort(400, description='Title is required')

    new_task = {
        'id': tasks[-1]['id'] + 1,
        'title': request.json['title'],
        'done': False
    }
    tasks.append(new_task)
    return jsonify({'task': new_task}), 201

if __name__ == '__main__':
    app.run(debug=True)
