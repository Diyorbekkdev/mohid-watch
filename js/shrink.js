const emailInput = document.getElementById('email');
const subscribeBtn = document.getElementById('subscribe-btn');
const errorMsg = document.getElementById('email-error-msg');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.valid) {
    subscribeBtn.classList.remove('shake');
    errorMsg.style.display = 'none';
  } else {
    subscribeBtn.classList.add('shake');
    errorMsg.style.display = 'block';
  }
});


