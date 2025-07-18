let isSignup = false;

function toggleForm() {
  isSignup = !isSignup;

  document.getElementById("form-title").textContent = isSignup ? "Sign Up" : "Login";
  document.getElementById("submit-btn").textContent = isSignup ? "Sign Up" : "Login";
  document.getElementById("toggle-text").innerHTML = isSignup
    ? 'Already have an account? <a href="#" onclick="toggleForm()">Login</a>'
    : 'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';

  document.getElementById("email-group").style.display = isSignup ? "block" : "none";
}

function handleSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();

  if (isSignup) {
    // Store user data in localStorage
    const userData = {
      username,
      password,
      email,
    };

    // Save to localStorage
    localStorage.setItem("user_" + username, JSON.stringify(userData));
    alert("Signup successful! You can now login.");
    toggleForm(); // Switch to login form
  } else {
    // Try to fetch user data from localStorage
    const storedUser = localStorage.getItem("user_" + username);

    if (!storedUser) {
      alert("Incorrect username or password.");
      return;
    }

    const userData = JSON.parse(storedUser);
    if (userData.password === password) {
      alert("Login successful! Welcome, " + username);
    } else {
      alert("Incorrect username or password.");
    }
  }

  document.getElementById("form").reset();
}
