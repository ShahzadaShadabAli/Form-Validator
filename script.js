const form = document.getElementById('form')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.querySelector('.message')

let isValid = false
let isMatched = false

//Checking Form Validity
function checkValidity() {
    isValid = form.checkValidity()
    //Changing Text And Styling If False
    if (!isValid) {
        message.textContent = 'Kindly Enter Valid Credentials'
        messageContainer.style.color = 'red'
        messageContainer.style.border = 'gray'
        return
    }

    //To validate The Password
    if (password.value === password2.value) {
        isMatched = true
        password.style.borderColor = 'green'
        password2.style.borderColor = 'green'
    } else {
        isMatched = false
        message.textContent = 'Kindly Verify Your Password'
        messageContainer.style.borderColor = 'red'
        messageContainer.style.color = 'red'
        password.style.borderColor = 'red'
        password2.style.borderColor = 'red'
        return
    }

    //If Registered successfully
    if (isValid && isMatched) {
     message.textContent = 'Successfully Registered!'
     messageContainer.style.borderColor = 'green'
     messageContainer.style.color = 'green'
    }
}

//User Form DATA
function userData(){
    const user = {
        name: form.name.value,
        email: form.email.value,
        website: form.website.value,
        phone: form.phone.value,
        password: form.password.value
    }

    //Do something with the data
    console.log(user)
}

//Extracting the Info From Form
function extractingCredentials(e) {
    e.preventDefault()
    checkValidity()
    if (isMatched && isValid) {
        userData()
    }
}

//Event Listeners
form.addEventListener('submit', extractingCredentials)