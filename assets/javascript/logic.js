const body = document.body;
const themetoggle = document.querySelector("#themeToggle");
const submit = document.getElementById("submit");
const form = document.querySelector('form');

let mode = "light"

themetoggle.addEventListener('click', function(event) {
    event.preventDefault();

    theme = body.getAttribute("data-toggle")
    if (mode === "light") {
        mode = "dark"
        body.setAttribute('class', 'dark')
    } else {
        mode = "light"
        body.setAttribute('class', 'light')
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = document.getElementById('userName').value;
    const blogHeaderValue = document.getElementById('title').value;
    const blogBodyValue = document.getElementById('content').value;
    localStorage.setItem('name', nameValue);
    localStorage.setItem('blogHeader', blogHeaderValue);
    localStorage.setItem('blogBody', blogBodyValue);
    
    const nameUser = document.getElementById('userName').value;
    const blogTitle = document.getElementById('title').value;
    const blogContent = document.getElementById('content').value;
    
    if (nameUser !== '' || blogTitle !== '' || blogContent !== '') {
    window.location.href = "blog.html";
    }
});
