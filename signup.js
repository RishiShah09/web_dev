// signup.js
// Define the signup function globally
function signup() {
    // Get values from the signup form
    const email = $("#signupname").val();
    const password = $("#signuppassword").val();

    // Make a POST request to the server for signup
    $.ajax({
        url: "http://localhost:3000/register",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ email, password }),
        success: function (response) {
            console.log(response);
            // Handle successful signup, e.g., redirect to login page
            // For example, redirect to the login page
            window.location.href = "index.html";
        },
        error: function (error) {
            console.error(error);
            // Handle signup error
            if (error.status === 400) {
                alert("Email already exists. Please use a different email.");
            } else  {
                alert("Signup failed. Please try again later.");
                console.log("Hello");
            }
        },
    });
}

// Make the signup function available globally
window.signup = signup;
