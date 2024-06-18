function validateForm() {
    const userName = document.getElementById('userName').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (userName === '' || title === '' || content === '') {
        alert('This is not a valid entry.');
        return false;
    }
}

submit.addEventListener ('click', function() {
    validateForm();
});