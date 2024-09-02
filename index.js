let username = document.querySelector('#username');
let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm-pass');
let profilePic = document.querySelector('#picture');
let signUpButton = document.querySelector('button');

function validate(input) {
    if (input.type === 'text') {
        if (input.value === ''){
            // Output on the DOM that the field is empty


        } else {
            // Store the data in localStorage
        }
    } else if (input.type === 'email') {
        let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (emailPattern.test(input.value)) {
            // Output a message to indicate a correct email pattern
            // Store the email in localStorage


        } else {
            // Output a message to indicate a wrong pattern


        }
    }else if (input.type === 'password') {
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

        if (passwordPattern.test(input.value)) {
            // Output a message to indicate a correct password pattern
            // Store the password in localStorage


        } else {
            // Output a message to indicate a wrong password pattern


        }

        if(input.value === confirm.value){
            // Output a message to indicate that the passwords match


        }else{
            // Output a message to indicate that passwords do not match


        }
    }
}

let users = {};

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();

    let inputFields = [username, firstname, lastname, email, password, confirm, profilePic];

    for (let input of inputFields) {
        validate(input);
    }

    users.inputFields;

    console.log(users);

    // return window.location.href = 'home.html';
})