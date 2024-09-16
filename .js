const loginForm = document.querySelector('.Login');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('.btn');
const correctUsername = 'Maddymedia';
const correctPassword = 'Pa$$w0rd';
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    if (username === correctUsername && password === correctPassword) {
        console.log('Login successful, redirecting to home page...'); 
        window.location.href = 'home.html';         
    } else {
        console.log('Invalid username or password');
        alert('Invalid username or password. Please try again.');
    }
});