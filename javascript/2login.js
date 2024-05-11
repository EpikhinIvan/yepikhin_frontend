
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');
const loginButton = document.getElementById('login');
const registerButton = document.getElementById('register');

const users = JSON.parse(localStorage.getItem('users')) || {};

function toggleForm() {
    document.querySelector('.container').classList.toggle('active');
}

signUpForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    if (!name || !email || !password){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Пожалуйста, заполните все поля формы регистрации.",
          });
        return;
    }

    users[email] = { name, email, password };
    localStorage.setItem('users', JSON.stringify(users));

    signUpForm.reset();

    Swal.fire({
        icon: "success",
        text: "Регистрация завершена!",
      });

    window.location.href = 'file:///C:/Users/Acer/Desktop/рубежка27/pages/1home.html';
});

signInForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    if (!email || !password){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Пожалуйста, заполните все поля формы входа.",
          });
        return;
    }

    if (users[email] && users[email].password === password) {
        signInForm.reset();

        Swal.fire({
            icon: "success",
            text: "Вы успешно вошли!",
          });

        window.location.href = 'file:///C:/Users/Acer/Desktop/рубежка27/pages/1home.html';
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Пользователь не найден.",
          });

    }
});

loginButton.addEventListener('click', toggleForm);
registerButton.addEventListener('click', toggleForm);
