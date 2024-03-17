function validateForm() {
    var isValid = true;
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var confirmCredentials = document.getElementById("confirmCredentials").checked;

    if (name === "" || mobile === "" || email === "" || password === "" || confirmPassword === "" || !confirmCredentials) {
        isValid = false;
        alert("Please fill out all required fields.");
    } else {
        alert("Registration Successful!");
        window.location.href = "login.html";
    }

    return isValid;
}

function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMatchMessage = document.getElementById("passwordMatchMessage");

    if (password !== confirmPassword) {
        passwordMatchMessage.innerHTML = "Passwords do not match";
        document.getElementById("confirmPassword").setCustomValidity("Passwords do not match");
    } else {
        passwordMatchMessage.innerHTML = "";
        document.getElementById("confirmPassword").setCustomValidity("");
    }
}
