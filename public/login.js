// In your login.js or the script where you handle the login form submission
document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Make the POST request to your backend login API
    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
        // Login successful, redirect to the main page
        window.location.href = '/main.html'; // Redirect to main page
    } else {
        // Handle login failure
        alert(result.message); // Display the error message
    }
});
