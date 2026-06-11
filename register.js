const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const passwordInput =  document.getElementById("user-password");


registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
})
register_userform();
function register_userform (){
    localStorage.setItem("user-name", usernameInput.value);
    localStorage.setItem("user-email", emailInput.value);
    localStorage.setItem("user-password", passwordInput.value);

    alert("Your account is created sucessfully!")

    window.location.href = "login.html"

}
