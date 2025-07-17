function checkPassword() {
  const password = document.getElementById("password").value;

  const length = document.getElementById("length");
  const uppercase = document.getElementById("uppercase");
  const lowercase = document.getElementById("lowercase");
  const number = document.getElementById("number");
  const special = document.getElementById("special");

  // Check length
  password.length >= 8 ? setValid(length) : setInvalid(length);

  // Check uppercase
  /[A-Z]/.test(password) ? setValid(uppercase) : setInvalid(uppercase);

  // Check lowercase
  /[a-z]/.test(password) ? setValid(lowercase) : setInvalid(lowercase);

  // Check number
  /\d/.test(password) ? setValid(number) : setInvalid(number);

  // Check special character
  /[!@#$%^&*]/.test(password) ? setValid(special) : setInvalid(special);
}

function setValid(element) {
  element.classList.remove("invalid");
  element.classList.add("valid");
  element.textContent = "✅ " + element.textContent.slice(2);
}

function setInvalid(element) {
  element.classList.remove("valid");
  element.classList.add("invalid");
  element.textContent = "❌ " + element.textContent.slice(2);
}
