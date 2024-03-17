
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").checked;

    // Check if any required field is empty
    if (email === "" || password === "" || !confirm) {
        alert("Please fill out all required fields and confirm the credentials.");
        return false;
    } else {
        // Show the login success alert
        alert("Login Successful!");
        return false; // Prevent form submission
    }
}