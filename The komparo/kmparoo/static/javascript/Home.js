document.getElementById("submit-btn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").checked;

    // Check if any required field is empty
    if (email === "" || password === "" || !confirm) {
        alert("Please fill out all required fields and confirm the credentials.");
    } else if (!validateEmail(email)) { // Check if email is valid
        alert("Please enter a valid email address.");
    } else {
        // Show the login success alert
        alert("Login Successful!");
        // Redirect to the next page after successful login (replace 'next-page.html' with your desired URL)
        window.location.href = "next-page.html";
    }
});

// Function to validate email
function validateEmail(email) {
    // Regular expression pattern for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}