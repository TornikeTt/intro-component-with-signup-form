const form_container = document.querySelector(".form-container");
const form = document.querySelector(".form-container form");

const first_Name_Input = document.querySelector(".input--first-name");
const last_Name_Input = document.querySelector(".input--last-name");
const email_Input = document.querySelector(".input--email");
const password_Input = document.querySelector(".input--password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

first_Name_Input.addEventListener("input", (e) => {
    const error_correct_Icon = document.querySelector(
        ".error-icon--first-name"
    );
    const errorMessage = document.querySelector(".error-message--first-name");

    const regex = /^[a-zA-Z]+$/;
    const result = regex.test(e.target.value);

    if (e.target.value !== "" && result === true) {
        errorMessage.innerText = "";

        error_correct_Icon.style.display = "flex";
        error_correct_Icon.src = "./images/correct.png";

        first_Name_Input.style.borderWidth = "2px";
        first_Name_Input.style.borderColor = "green";
    } else {
        error_correct_Icon.style.display = "block";
        error_correct_Icon.src = "./images/icon-error.svg";

        first_Name_Input.style.borderWidth = "2px";
        first_Name_Input.style.borderColor = "hsl(0, 100%, 74%)";

        if (e.target.value === "") {
            errorMessage.innerText = "First Name cannot be empty";
        } else if (result === false) {
            errorMessage.innerText =
                "First name must use only English letters (no symbols or numbers).";
        }
    }
});

last_Name_Input.addEventListener("input", (e) => {
    const error_correct_Icon = document.querySelector(".error-icon--last-name");
    const errorMessage = document.querySelector(".error-message--last-name");

    const regex = /^[a-zA-Z]+$/;
    const result = regex.test(e.target.value);

    if (e.target.value !== "" && result === true) {
        errorMessage.innerText = "";

        error_correct_Icon.style.display = "flex";
        error_correct_Icon.src = "./images/correct.png";

        last_Name_Input.style.borderWidth = "2px";
        last_Name_Input.style.borderColor = "green";
    } else {
        error_correct_Icon.style.display = "block";
        error_correct_Icon.src = "./images/icon-error.svg";

        last_Name_Input.style.borderWidth = "2px";
        last_Name_Input.style.borderColor = "hsl(0, 100%, 74%)";

        if (e.target.value === "") {
            errorMessage.innerText = "Last Name cannot be empty";
        } else if (result === false) {
            errorMessage.innerText =
                "Last name must use only English letters (no symbols or numbers).";
        }
    }
});

email_Input.addEventListener("input", (e) => {
    const error_correct_Icon = document.querySelector(".error-icon--email");
    const errorMessage = document.querySelector(".error-message--email");

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = regex.test(e.target.value);

    if (e.target.value !== "" && result === true) {
        errorMessage.innerText = "";

        error_correct_Icon.style.display = "flex";
        error_correct_Icon.src = "./images/correct.png";

        email_Input.style.borderWidth = "2px";
        email_Input.style.borderColor = "green";
    } else {
        error_correct_Icon.style.display = "block";
        error_correct_Icon.src = "./images/icon-error.svg";

        email_Input.style.borderWidth = "2px";
        email_Input.style.borderColor = "hsl(0, 100%, 74%)";

        if (e.target.value === "") {
            errorMessage.innerText = "Email cannot be empty";
        } else if (result === false) {
            errorMessage.innerText = "Looks like this is not an eamil.";
        }
    }
});

/* 
    Password check:
    1. Minimum 6 characters.
    2. Maximum 20 characters.
    3. Must contain at least 1 uppercase letter.
    4. Must include at least 1 symbol.
*/
