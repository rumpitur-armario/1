// Handle logout by removing the token from localStorage
function logout() {
    // Clear the token
    localStorage.removeItem('auth-token');
    // Redirect to the login page
    window.location.href = '/login'; // Redirect to login page after logout
}
