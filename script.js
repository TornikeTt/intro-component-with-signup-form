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
            "Password must be 6-20 characters with 1 uppercase letter and 1 symbol.",
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

/*  
    validateInput checks whether an input field is correctly filled.  

    Validation rules:  
    1. No input field can be empty.  
    2. First Name / Last Name must contain only English letters.  
    3. Email must be in a valid email format.  
    4. Password requirements:  
        - Minimum 6 characters  
        - Maximum 20 characters  
        - Must include at least one uppercase letter  
        - Must include at least one symbol  
*/

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

    /*  
        Adjusting the height of the form container, button, and form sections  
        based on the number of invalid input fields.  

        1. The initial height of the form container is 450px.  
        - If all 4 inputs are invalid, the height should be 550px.  
        - The formula used to adjust the height dynamically is:  
                450 + (number of invalid inputs * 25)  

        2. The button’s top margin is adjusted to keep proper spacing:  
                18 + (number of invalid inputs * 3)  

        3. Each form section's top margin increases based on the number of invalid fields:  
                18 + (number of invalid inputs * 6.75)  

        Example calculations:  
        - If 3 inputs are invalid:  
                formContainer height: 450 + (3 * 25) = 525px  
                button margin: 18 + (3 * 3) = 27px  
                form section margin: 18 + (3 * 6.75) = 38.25px  

        - If only 2 inputs are invalid:  
                formContainer height: 450 + (2 * 25) = 500px  
                button margin: 18 + (2 * 3) = 24px  
                form section margin: 18 + (2 * 6.75) = 31.5px  

        This ensures that the layout adjusts dynamically based on validation results.
    */

    formContainer.style.height = `${450 + invalid_Count * 25}px`;
    button.style.marginTop = `${18 + invalid_Count * 3}px`;

    for (let i = 0; i < formSection.length; i++) {
        formSection[i].style.marginTop = `${18 + invalid_Count * 6.75}px`;
    }
}
