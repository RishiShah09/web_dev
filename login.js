function login() {
    console.log("Login function called"); // Check if the function is called
    const email = $("#loginname").val();
    const password = $("#loginpassword").val();

    console.log("Email:", email, "Password:", password); // Check if data is correct

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ email, password }),
        success: function (response) {
            console.log("Login success:", response);
            window.location.href = "index.html";
        },
        error: function (error) {
            console.error("Login error:", error);
            if (error.status === 401) {
                alert("Invalid credentials. Please try again.");
            } else {
                alert("Login failed. Please try again later.");
            }
        },
    });
}
