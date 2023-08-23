// Function to validate the form and check credentials
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  const validUsername = "admin";
  const validPassword = "password";

  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const messageParagraph = document.getElementById('message');

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === validUsername && enteredPassword === validPassword) {
    messageParagraph.textContent = 'Login successful!';
  } else {
    messageParagraph.textContent = 'Invalid username or password!';
  }

  // Reset the form after displaying the message
  document.getElementById('loginForm').reset();
});
