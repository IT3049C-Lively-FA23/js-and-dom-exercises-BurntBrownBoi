// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('togglePassword');

// 🤖: Create an Event Listener on the password reveal button
toggleButton.addEventListener('click', function() {
  if(passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleButton.classList.remove('bi-eye-slash');
    toggleButton.classList.add('bi-eye');
  } else {
    passwordInput.type = 'password';
    toggleButton.classList.remove('bi-eye');
    toggleButton.classList.add('bi-eye-slash');
  }
});
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
