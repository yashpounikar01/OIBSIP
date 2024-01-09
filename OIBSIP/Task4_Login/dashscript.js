

function logout() {
    // Clear user credentials from localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  
    // Redirect to the login page (replace 'login.html' with the login page)
    window.location.href = "index.html";
  }
  