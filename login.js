

function loginUser(){
const enteredName = document.getElementById("login-username").value
const enteredPassword = document.getElementById("login-password").value


let savedUser = localStorage.getItem("userInput")
let savedPassword = localStorage.getItem("passwordInput")

if (
    enteredName === savedUser &&
    enteredPassword === savedPassword
){
    window.location.href = "dashboard.html"
}else{
    alert("Invalid username or password")
}
}