let form = document.querySelector(".form-container form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const form_Values = {
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    form.reset();
});
