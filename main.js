// Selección de los elementos del DOM
const firstName = document.querySelector("#FirstNameInput");
const lastName = document.querySelector("#LastNameInput");
const email = document.querySelector("#EmailInput");
const password = document.querySelector("#PasswordInput");

const firstNameError = document.querySelector("#FirstNameError");
const lastNameError = document.querySelector("#LastNameError");
const emailError = document.querySelector("#EmailError");
const passwordError = document.querySelector("#PasswordError");

// Función para mostrar errores
function showError(elementError, message) {
  elementError.innerHTML = `
    <img class="iconError" src="/images/icon-error.svg" alt="icon-error">
    <p class="error">${message}</p>
  `;
  elementError.classList.add('show'); // Mostrar el contenedor de error
}

// Función para ocultar errores
function hideError(elementError) {
  elementError.innerHTML = ''; // Elimina el contenido de error
  elementError.classList.remove('show'); // Oculta el contenedor de error
}

// Función de validación del formulario
function validateForm(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  let isValid = true;

  // Validar First Name
  if (firstName.value.trim() === "") {
    showError(firstNameError, "First Name cannot be empty");
    isValid = false;
  } else {
    hideError(firstNameError);
  }

  // Validar Last Name
  if (lastName.value.trim() === "") {
    showError(lastNameError, "Last Name cannot be empty");
    isValid = false;
  } else {
    hideError(lastNameError);
  }

  // Validar Email (simple validación de formato)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === "") {
    showError(emailError, "Email cannot be empty");
    isValid = false;
  } else if (!emailRegex.test(email.value)) {
    showError(emailError, "Looks like this is not an email");
    isValid = false;
  } else {
    hideError(emailError);
  }

  // Validar Password (mínimo 6 caracteres y al menos 1 carácter especial)
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
  if (password.value.trim() === "") {
    showError(passwordError, "Password cannot be empty");
    isValid = false;
  } else if (!passwordRegex.test(password.value)) {
    showError(passwordError, "Password must be at least 6 characters long and contain at least 1 special character");
    isValid = false;
  } else {
    hideError(passwordError);
  }

  // Si todos los campos son válidos, puedes enviar el formulario
  if (isValid) {
    alert("Form submitted successfully!");
    // Aquí puedes agregar la lógica para enviar el formulario
  }
}

// Escuchar el evento de envío del formulario
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);