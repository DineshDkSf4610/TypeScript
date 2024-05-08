"use strict";
function signUp() {
    var signup = document.getElementById("signUpId");
    var login = document.getElementById("loginId");
    signup.style.display = "block";
    login.style.display = "none";
}
function login() {
    var signup = document.getElementById("signUpId");
    var login = document.getElementById("loginId");
    signup.style.display = "none";
    login.style.display = "block";
}
