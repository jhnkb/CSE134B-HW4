const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const commentsInput = document.querySelector("#comments");
const formInfo = document.querySelector("#form-info");
const formError = document.querySelector("#error-message");

const form = document.querySelector("#contact");
const formErrorsInput = document.querySelector("#form-errors");
const form_errors = [];


let nameEdited = false;
let emailEdited = false;
let commentsEdited = false;
let submitAttempted = false;

function updateFormErrors() {
    let errors = "";

    if ((nameEdited || submitAttempted) && !nameInput.validity.valid) {
        errors += "Name: " + nameInput.validationMessage + "\n";
    }

    if ((emailEdited || submitAttempted) && !emailInput.validity.valid) {
        errors += "Email: " + emailInput.validationMessage + "\n";
    }

    if ((commentsEdited || submitAttempted) && !commentsInput.validity.valid) {
        errors += "Comments: " + commentsInput.validationMessage + "\n";
    }

    if (errors !== "") {
        formError.textContent = "Please correct the following errors:\n" + errors;
    } else {
        formError.textContent = "";
    }
}

function validateName() {
    nameInput.setCustomValidity("");

    if (nameInput.validity.valueMissing) {
        nameInput.setCustomValidity("Please enter your name.");
    } else if (nameInput.validity.tooShort) {
        nameInput.setCustomValidity("Your name must contain at least 1 character.");
    } else if (nameInput.validity.tooLong) {
        nameInput.setCustomValidity("Your name cannot exceed 100 characters.");
    }

    if (nameInput.validity.valid) {
        nameInput.classList.remove("has-error");
    } else {
        nameInput.classList.add("has-error");
    }
}

function validateEmail() {
    emailInput.setCustomValidity("");

    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity("Please enter your email address.");
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Please enter a valid email address (e.g., name@example.com).");
    }

    if (emailInput.validity.valid){
        emailInput.classList.remove("has-error");
    }else{
        emailInput.classList.add("has-error");
    }
}

function validateComments() {
    commentsInput.setCustomValidity("");

    if (commentsInput.validity.valueMissing) {
        commentsInput.setCustomValidity("Please enter your comments.")
    } else if (commentsInput.validity.tooShort) {
        commentsInput.setCustomValidity("The comment is too short. Write at least 10 characters.");
    } else if (commentsInput.validity.tooLong) {
        commentsInput.setCustomValidity("The comment is too long. The maximum is 1,000 characters.");
    } 

    if (commentsInput.validity.valid) {
    commentsInput.classList.remove("has-error");
    } else {
        commentsInput.classList.add("has-error");
    }
}

function recordFormErrors() {
    if (!nameInput.validity.valid) {
        form_errors.push({
            field: "name",
            error: nameInput.validationMessage
        });
    }

    if (!emailInput.validity.valid) {
        form_errors.push({
            field: "email",
            error: emailInput.validationMessage
        });
    }

    if (!commentsInput.validity.valid) {
        form_errors.push({
            field: "comments",
            error: commentsInput.validationMessage
        });
    }

    console.log("Error history:", form_errors);
}

function updateCharacterCount() {
    const maxLength = commentsInput.maxLength;
    const remaining = maxLength - commentsInput.value.length;

    formInfo.classList.remove("warning");

    if (remaining === 0) {
        formInfo.textContent = "You have reached the 1,000 character limit.";
        formInfo.classList.add("warning");
    } else if (remaining <= 100) {
        formInfo.textContent = "Warning: Only " + remaining + " characters remaining!";
        formInfo.classList.add("warning");
    } else {
        formInfo.textContent = remaining + " characters remaining.";
    }
}

nameInput.addEventListener("blur", function () {
    if (nameEdited){
        validateName();
        updateFormErrors();
    }
});

nameInput.addEventListener("input", function () {
    nameEdited = true;

    if (nameInput.classList.contains("has-error")) {
        validateName();
        updateFormErrors();
    }
});

emailInput.addEventListener("blur", function() {
    if (emailEdited) {
        validateEmail();
        updateFormErrors();
    }
});

emailInput.addEventListener("input", function() {
    emailEdited = true;

    if (emailInput.classList.contains("has-error")) {
        validateEmail();
        updateFormErrors();
    }
});

commentsInput.addEventListener("blur", function() {
    if (commentsEdited) {
        validateComments();
        updateFormErrors();
    }
});

commentsInput.addEventListener("input", function() {
    commentsEdited = true;

    if (commentsInput.classList.contains("has-error")) {
        validateComments();
        updateFormErrors();
    }

    updateCharacterCount();
});

formInfo.hidden = false;
updateCharacterCount();

form.noValidate = true;

form.addEventListener("submit", function (event) {
    submitAttempted = true;

    validateName();
    validateEmail();
    validateComments();

    updateFormErrors();

    if (!nameInput.validity.valid ||
        !emailInput.validity.valid ||
        !commentsInput.validity.valid) {

        event.preventDefault();
        recordFormErrors();

    } else {
        formErrorsInput.value = JSON.stringify(form_errors);
    }
});
