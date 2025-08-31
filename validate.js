document.getElementById('registrationForm').addEventListener('submit', function (e) {
  const form = e.target;
  let errorMsg = '';

  if (form.name.value.trim().length < 2) {
    errorMsg = 'Name should be at least 2 characters.';
  } else if (!form.email.value.match(/^\S+@\S+\.\S+$/)) {
    errorMsg = 'Please enter a valid email.';
  } else if (form.password.value.length < 5) {
    errorMsg = 'Password must be at least 5 characters.';
  } else if (form.password.value !== form.confirmPassword.value) {
    errorMsg = 'Passwords do not match.';
  } else if (!form.dob.value) {
    errorMsg = 'Please select your date of birth.';
  } else if (!form.gender.value) {
    errorMsg = 'Please select your gender.';
  }

  if (errorMsg) {
    e.preventDefault();
    document.getElementById('formError').innerText = errorMsg;
  } else {
    document.getElementById('formError').innerText = '';
  }
});
