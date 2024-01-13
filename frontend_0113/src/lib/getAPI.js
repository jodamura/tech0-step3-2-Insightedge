// 特定の投稿を取得する関数
export async function getPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    return post;
}

  // 全ての投稿を取得する関数
export async function getPosts() {
    const res = await fetch('https://tech0-5th-fumi-obata2-flask-japaneast.azurewebsites.net/genstory?story_id=new&story_start=%27%E6[…]92%E8%A6%8B%E3%81%AA%E3%81%8C%E3%82%89%27');
    const posts = await res.json();
    return posts;
}