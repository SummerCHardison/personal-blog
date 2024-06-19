blogPosts = JSON.parse(localStorage.getItem('posts'));

if (newPost.name != null && newPost.title != null && newPost.content != null) {
    let ul = createElement('ul');
    postName = createElement("li").textContent('Username: ${newPost.name}');
    ul.appendChild(postName)
}