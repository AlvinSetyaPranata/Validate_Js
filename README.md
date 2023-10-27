# sans_validate
Simple library client side validation for vanilla js

This libray created using Vanilla js.

## How to Use


const validate = new Validate();
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validate.validation(form.name, ["required", "min"],5);
    validate.validation(form.email, ["required", "email"]);
})
