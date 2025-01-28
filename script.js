const form_container = document.querySelector(".form-container");

/* 
    1. First Name cannot be empty.
    2. First name must use English letters only.
    3. First name should not contain numbers.
    4. First name should be free of symbols.
*/

const firstNameInput = document.querySelector(".input--first-name");
firstNameInput.addEventListener("input", (e) => {
    const error_correct_Icon = document.querySelector(
        ".error-icon--first-name"
    );
    const errorMessage = document.querySelector(".error-message--first-name");
    const input = document.querySelector(".input--first-name");

    const nameRegex = /^[a-zA-Z]+$/;
    const result = nameRegex.test(e.target.value);

    if (e.target.value !== "" && result === true) {
        errorMessage.innerText = "";

        error_correct_Icon.style.display = "flex";
        error_correct_Icon.src = "./images/correct.png";

        input.style.borderWidth = "2px";
        input.style.borderColor = "green";
    } else {
        error_correct_Icon.style.display = "block";
        error_correct_Icon.src = "./images/icon-error.svg";

        input.style.borderWidth = "2px";
        input.style.borderColor = "hsl(0, 100%, 74%)";
    }
});
