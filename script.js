let username = document.querySelector('#username');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm-pass');
let profilePic = document.querySelector('#picture');
let signUpButton = document.querySelector('button');

function displayError(input, message) {
    // Remove any previous error message for this input
    let existingError = input.parentElement.querySelector('.error');
    if (existingError) {
        existingError.remove();
    }

    // Create a new error message element
    let errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.style.color = 'red';
    errorElement.textContent = message;

    // Append the error message below the input field
    input.parentElement.appendChild(errorElement);
}

function validate(input) {
    let isValid = true;

    if (input.type === 'text' && input.value.trim() === '') {
        displayError(input, 'This field cannot be empty.');
        isValid = false;
    } else if (input.type === 'email') {
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(input.value)) {
            displayError(input, 'Please enter a valid email.');
            isValid = false;
        }
    } else if (input.type === 'password') {
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        if (!passwordPattern.test(input.value)) {
            displayError(input, 'Password must be 8-15 characters long and include uppercase, lowercase, number, and special character.');
            isValid = false;
        }
        if (input === password && input.value !== confirm.value) {
            displayError(confirm, 'Passwords do not match.');
            isValid = false;
        }
    }
    return isValid;
}

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    let inputFields = [username, firstname, lastname, email, password, confirm, profilePic];
    let isFormValid = true;

    // Clear existing errors
    inputFields.forEach(input => {
        let error = input.parentElement.querySelector('.error');
        if (error) {
            error.remove();
        }
    });

    // Validate each input
    for (let input of inputFields) {
        if (!validate(input)) {
            isFormValid = false;
        }
    }

    if (isFormValid) {
        // Store user data in localStorage
        let userData = {
            username: username.value,
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            profilePic: profilePic.files[0] ? URL.createObjectURL(profilePic.files[0]) : ''
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to home page
        window.location.href = 'home.html';
    }
});