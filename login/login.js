const loginView = document.getElementById("loginView");
const signupView = document.getElementById("signupView");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginEye = document.getElementById("loginEye");

const signupName = document.getElementById("signupName");
const signupEmail = document.getElementById("signupEmail");
const dialCode = document.getElementById("dialCode");
const signupPhone = document.getElementById("signupPhone");
const signupCountry = document.getElementById("signupCountry");
const signupState = document.getElementById("signupState");
const signupDistrict = document.getElementById("signupDistrict");
const signupPlace = document.getElementById("signupPlace");
const signupPincode = document.getElementById("signupPincode");
const signupPassword = document.getElementById("signupPassword");
const signupConfirm = document.getElementById("signupConfirm");
const signupBtn = document.getElementById("signupBtn");
const signupEye = document.getElementById("signupEye");
const confirmEye = document.getElementById("confirmEye");

const goSignupBtn = document.getElementById("goSignupBtn");
const goLoginBtn = document.getElementById("goLoginBtn");

function switchView(viewName) {
  loginView.classList.remove("active");
  signupView.classList.remove("active");

  if (viewName === "signup") {
    signupView.classList.add("active");
  } else {
    loginView.classList.add("active");
  }

  clearAllErrors();
}

function toggleEye(inputEl, buttonEl) {
  if (inputEl.type === "password") {
    inputEl.type = "text";
    buttonEl.textContent = "🙈";
  } else {
    inputEl.type = "password";
    buttonEl.textContent = "👁";
  }
}

function setError(inputEl, errId, message) {
  inputEl.classList.remove("ok");
  inputEl.classList.add("error");
  document.getElementById(errId).textContent = message;
  return false;
}

function setOk(inputEl, errId) {
  inputEl.classList.remove("error");
  inputEl.classList.add("ok");
  document.getElementById(errId).textContent = "";
  return true;
}

function clearAllErrors() {
  document.querySelectorAll("input, select").forEach(function (el) {
    el.classList.remove("error", "ok");
  });

  document.querySelectorAll(".err-msg").forEach(function (el) {
    el.textContent = "";
  });

  resetStrength();
}

function validateRequired(inputEl, errId, label) {
  var value = inputEl.value.trim();

  if (!value) {
    return setError(inputEl, errId, label + " is required.");
  }

  return setOk(inputEl, errId);
}

function validateName() {
  var value = signupName.value.trim();

  if (!value) {
    return setError(signupName, "signupNameErr", "Full name is required.");
  }

  if (value.length < 2) {
    return setError(signupName, "signupNameErr", "Name must be at least 2 characters.");
  }

  return setOk(signupName, "signupNameErr");
}

function validateEmail(inputEl, errId) {
  var value = inputEl.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!value) {
    return setError(inputEl, errId, "Email is required.");
  }

  if (!emailPattern.test(value)) {
    return setError(inputEl, errId, "Enter a valid email address.");
  }

  return setOk(inputEl, errId);
}

function validatePhone() {
  var value = signupPhone.value.trim();
  var digits = value.replace(/[\s\-()+]/g, "");

  if (!value) {
    return setError(signupPhone, "signupPhoneErr", "Phone number is required.");
  }

  if (!/^\d{7,15}$/.test(digits)) {
    return setError(signupPhone, "signupPhoneErr", "Enter 7 to 15 digits.");
  }

  return setOk(signupPhone, "signupPhoneErr");
}

function validatePincode() {
  var value = signupPincode.value.trim();

  if (!value) {
    return setError(signupPincode, "signupPincodeErr", "Pincode / postal code is required.");
  }

  if (value.length < 4 || value.length > 10) {
    return setError(signupPincode, "signupPincodeErr", "Use 4 to 10 characters.");
  }

  return setOk(signupPincode, "signupPincodeErr");
}

function validatePassword() {
  var value = signupPassword.value;
  var specialPattern = /[!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/;

  if (!value) {
    return setError(signupPassword, "signupPasswordErr", "Password is required.");
  }

  if (value.length < 6) {
    return setError(signupPassword, "signupPasswordErr", "Password must be at least 6 characters.");
  }

  if (!/[A-Z]/.test(value)) {
    return setError(signupPassword, "signupPasswordErr", "Use at least one uppercase letter.");
  }

  if (!/[0-9]/.test(value)) {
    return setError(signupPassword, "signupPasswordErr", "Use at least one number.");
  }

  if (!specialPattern.test(value)) {
    return setError(signupPassword, "signupPasswordErr", "Use at least one special character.");
  }

  return setOk(signupPassword, "signupPasswordErr");
}

function validateConfirm() {
  if (!signupConfirm.value) {
    return setError(signupConfirm, "signupConfirmErr", "Confirm your password.");
  }

  if (signupConfirm.value !== signupPassword.value) {
    return setError(signupConfirm, "signupConfirmErr", "Passwords do not match.");
  }

  return setOk(signupConfirm, "signupConfirmErr");
}

function resetStrength() {
  ["seg1", "seg2", "seg3"].forEach(function (id) {
    var segment = document.getElementById(id);
    if (segment) {
      segment.className = "strength-seg";
    }
  });

  var label = document.getElementById("strengthLabel");
  if (label) {
    label.textContent = "";
  }
}

function checkStrength(value) {
  var seg1 = document.getElementById("seg1");
  var seg2 = document.getElementById("seg2");
  var seg3 = document.getElementById("seg3");
  var label = document.getElementById("strengthLabel");
  var specialPattern = /[!@#$%^&*()\-_=+\[\]{};:'",.<>/?\\|`~]/;

  resetStrength();

  if (!value) {
    return;
  }

  var score = 0;

  if (value.length >= 6) {
    score++;
  }

  if (/[A-Z]/.test(value) && /[0-9]/.test(value)) {
    score++;
  }

  if (specialPattern.test(value) && value.length >= 10) {
    score++;
  }

  if (score === 1) {
    seg1.classList.add("weak");
    label.textContent = "Weak";
    label.style.color = "#ff6b6b";
  } else if (score === 2) {
    seg1.classList.add("medium");
    seg2.classList.add("medium");
    label.textContent = "Medium";
    label.style.color = "#ffc857";
  } else {
    seg1.classList.add("strong");
    seg2.classList.add("strong");
    seg3.classList.add("strong");
    label.textContent = "Strong";
    label.style.color = "#7affc8";
  }
}

function handleSignup() {
  var validName = validateName();
  var validEmail = validateEmail(signupEmail, "signupEmailErr");
  var validPhone = validatePhone();
  var validCountry = validateRequired(signupCountry, "signupCountryErr", "Country");
  var validState = validateRequired(signupState, "signupStateErr", "State");
  var validDistrict = validateRequired(signupDistrict, "signupDistrictErr", "District");
  var validPlace = validateRequired(signupPlace, "signupPlaceErr", "Place");
  var validPincode = validatePincode();
  var validPassword = validatePassword();
  var validConfirm = validateConfirm();

  if (
    validName && validEmail && validPhone && validCountry && validState &&
    validDistrict && validPlace && validPincode && validPassword && validConfirm
  ) {
    var result = createUser({
      fullName: signupName.value,
      email: signupEmail.value,
      dialCode: dialCode.value,
      phone: signupPhone.value,
      password: signupPassword.value,
      address: {
        country: signupCountry.value,
        state: signupState.value,
        district: signupDistrict.value,
        place: signupPlace.value,
        pincode: signupPincode.value
      }
    });

    if (!result.ok) {
      setError(signupEmail, "signupEmailErr", result.message);
      return;
    }

    window.location.href = "../homepage/homepage.html";
  }
}

function handleLogin() {
  var validEmail = validateEmail(loginEmail, "loginEmailErr");
  var validPassword = validateRequired(loginPassword, "loginPasswordErr", "Password");

  if (validEmail && validPassword) {
    var result = loginUser(loginEmail.value, loginPassword.value);

    if (!result.ok) {
      setError(loginPassword, "loginPasswordErr", result.message);
      return;
    }

    window.location.href = "../homepage/homepage.html";
  }
}

goSignupBtn.addEventListener("click", function () {
  switchView("signup");
});

goLoginBtn.addEventListener("click", function () {
  switchView("login");
});

loginEye.addEventListener("click", function () {
  toggleEye(loginPassword, loginEye);
});

signupEye.addEventListener("click", function () {
  toggleEye(signupPassword, signupEye);
});

confirmEye.addEventListener("click", function () {
  toggleEye(signupConfirm, confirmEye);
});

signupPassword.addEventListener("input", function () {
  checkStrength(signupPassword.value);
});

signupBtn.addEventListener("click", handleSignup);
loginBtn.addEventListener("click", handleLogin);

initCanvasBackground();
