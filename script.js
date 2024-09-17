// Script to toggle the registration form visibility
document.getElementById('registerBtn').addEventListener('click', function() {
  var form = document.getElementById('registrationForm');
  if (form.style.display === "none") {
      form.style.display = "block";
  } else {
      form.style.display = "none";
  }
});
