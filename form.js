const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const emailInput = document.querySelector("#email");
const commentsInput = document.querySelector("#comments");

nameInput.addEventListener("blur", function() {
    nameInput.setCustomValidity("");

    if (nameInput.validity.valueMissing) {
        nameInput.setCustomValidity("Please enter your name.");
    } else if (nameInput.validity.tooShort) {
        nameInput.setCustomValidity("Your name must contain at least 1 character.");
    } else if (nameInput.validity.tooLong) {
        nameInput.setCustomValidity("Your name cannot exceed 100 characters.");
    }

    if (nameInput.validity.valid) {
        nameError.textContent = "";
    } else {
        nameError.textContent = nameInput.validationMessage;
    }
});

nameInput.addEventListener("input", function () {
    nameInput.setCustomValidity("");
    nameError.textContent = "";
});