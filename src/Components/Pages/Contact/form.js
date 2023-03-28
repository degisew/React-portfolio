const form = document.getElementById('form');
const fname = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    fname.value = '';
    email.value = '';
    message.value = '';
  } else {
    email.focus();
    errorMessage.innerHTML = 'Please enter a valid lowercase email!';
    email.value = email.value.toLowerCase();
  }
});