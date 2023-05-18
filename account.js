var loginform = document.getElementById("loginform")
var RegForm = document.getElementById("RegForm")
var indicator = document.getElementById("indicator")

function register() {
    RegForm.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";

}
function login() {
    RegForm.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}