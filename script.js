const form = document.querySelector(".form-container form");

const inputsData = {
    firstName: {
        valid: true,
        input: document.querySelector(".input--first-name"),
        validationRule: /^[a-zA-Z]+$/,
        errorMessage:
            "First Name must use only English letters (no symbols or numbers).",
        empty_errorMessage: "First Name cannot be empty",
    },

    lastName: {
        valid: true,
        input: document.querySelector(".input--last-name"),
        validationRule: /^[a-zA-Z]+$/,
        errorMessage:
            "Last Name must use only English letters (no symbols or numbers).",
        empty_errorMessage: "Last Name cannot be empty",
    },

    email: {
        valid: true,
        input: document.querySelector(".input--email"),
        validationRule: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errorMessage: "Looks like this is not a valid email.",
        empty_errorMessage: "Email cannot be empty",
    },

    password: {
        valid: true,
        input: document.querySelector(".input--password"),
        validationRule:
            /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,20}$/,
        errorMessage:
            "Password must be 6-20 characters, include 1 uppercase letter, and 1 symbol.",
        empty_errorMessage: "Password cannot be empty",
    },
};

for (const field in inputsData) {
    const input = inputsData[field].input;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        validateInput(input, field);
    });

    input.addEventListener("input", () => validateInput(input, field));
}

function validateInput(input, field) {
    const error_correct_Icon = document.querySelector(`.error-icon--${field}`);
    const errorMessage = document.querySelector(`.error-message--${field}`);
    const regex = inputsData[field].validationRule;
    const isValid = regex.test(input.value);
    const value = input.value;

    if (value !== "" && isValid === true) {
        inputsData[field].valid = true;

        error_correct_Icon.style.display = "flex";
        error_correct_Icon.src = "./images/correct.png";

        input.style.borderWidth = "2px";
        input.style.borderColor = "green";

        errorMessage.innerText = "";
    } else {
        inputsData[field].valid = false;

        error_correct_Icon.style.display = "block";
        error_correct_Icon.src = "./images/icon-error.svg";

        input.style.borderWidth = "2px";
        input.style.borderColor = "hsl(0, 100%, 74%)";

        if (value === "") {
            errorMessage.innerText = inputsData[field].empty_errorMessage;
        } else {
            errorMessage.innerText = inputsData[field].errorMessage;
        }
    }

    adjustHeight();
}

function adjustHeight() {
    const formContainer = document.querySelector(".form-container");
    const formSection = document.querySelectorAll(".form-section");
    const button = document.querySelector(".button--submit");

    const invalid_Count = Object.values(inputsData).filter(
        (data) => !data.valid
    ).length;

    if (invalid_Count === 0) {
        form.style.marginTop = "20px";
    } else if (invalid_Count === 4) {
        form.style.marginTop = "0px";
    }

    formContainer.style.height = `${450 + invalid_Count * 25}px`;
    button.style.marginTop = `${18 + invalid_Count * 3}px`;

    for (let i = 0; i < formSection.length; i++) {
        formSection[i].style.marginTop = `${18 + invalid_Count * 6.75}px`;
    }
}

/* 
    1. if count = 4 form margin-top: 0;
    2. if count = 4 button margin-top: 30px;
    3. if count = 4 form-section margin-top: 45px;
*/
