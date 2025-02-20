let SignIn = document.getElementById('myForm')

SignIn.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    const user = {
        username,
        email
    }
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'body.html'

})
