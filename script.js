let username = document.querySelector('#username');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm-pass');
let profilePic = document.querySelector('#picture');
let signUpButton = document.querySelector('#button');

function displayError(input, message) {
    let errorElement = document .createElement('div');

    errorElement.className = 'error';
    errorElement.style.color = 'red';
    errorElement.textContent = message;

    input.parentElement.appendChild(errorElement);
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
}

function validate(input) {
    clearErrors(); // Clear any existing errors
    let isValid = true;

    if (input.type === 'text' && input.value === '') {
        displayError(input, 'This field cannot be empty');
        isValid = false;

    } else if (input.type === 'email') {
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!emailPattern.test(input.value)) {
            displayError(input, 'Please enter a valid email address.');
            isValid = false;

        }
    } else if (input.type === 'password') {
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (!passwordPattern.test(input.value)) {
            displayError(input, 'Password must be 8-15 characters long and iclude uppercase, lowercase, number and special character.');
            isValid = false;

        }else if (input.value !== confirm.value) {
            displayError(confirm, 'Passwords do not match!');
            isValid = false;

        }
    }
    return isValid;
}

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();

    let inputFields = [username, firstname, lastname, email, password, confirm, profilePic];
    let isFormValid = true;

    for (let inputField of inputFields) {
        if (!validate(inputField)) {
            isFormValid = false;
        }
    }

    if (isFormValid) {
        //Store user data in localStorage
        let userData = {
            username: username.value,
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            profilePic: profilePic.files[0] ? URL.createObjectURL(profilePic.files[0]) : ''
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to homepage
        window.location.href = 'home.html';
    }
});