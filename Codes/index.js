const data = JSON.parse(localStorage.getItem('User'));
const result = data[0];
document.getElementById('Login3').textContent = result;