const form = document.getElementById('form')
const username_input = document.getElementById('username-input')
const emailid_input = document.getElementById('emailid-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementByID ('error-message')

form.addEventListener('submit', (e)=> {
e.preventDefault() Prevent Submit

 let errors = []
 if(repeat_password_input){
// If we have a repeat password input then we are on the sign up page
errors = getSignupFormErrors (username_input.value, emailid_input.value, password_input.value, repeat_password_input.value)
}
else{
    //If we don't have a repeat password input then we are in the login page
    errors = getLoginFormErrors(username_input.value, password_input.value, emailid_input.value)
}
if(errors.length > 0){
    e.preventDefault() 
    error_message.innerText = errors.join (".")
}
})

function getSignupFormErrors(username, email, password, repeatPassword){
let errors = []

if(username === '' || username == null){
    errors.push('Username is required')
    username_input.parentElement.classList.add('incorrect')
}
if(emailid === '' || emailid == null){
    errors.push('Email ID is required')
    emailid_input.parentElement.classList.add('incorrect')
}
if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
}
if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
}
if(password !=repeat-password){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
}

return errors; 
}
function getLoginFormErrors (username, emailid, password)
let errors = []

if(username === '' || username == null){
    errors.push('Username is required')
    username_input.parentElement.classList.add('incorrect')
}
if(emailid === '' || emailid == null){
    errors.push('Email ID is required')
    emailid_input.parentElement.classList.add('incorrect')
}
if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
}

const allInputs = [username_input, emailid_input, password_input, repeat_password_input].filter(input => input != null)

allInputs.forEach (input => {
    input.addEventListener ('input', () => {
        if(input.parentElement.classList.contains ('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})