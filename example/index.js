// Initial library validate

// Without costum message
const validate = new Validate();

// With costum message
// const validate = new Validate({
//     required: "costum message required",
//     email: "costum message email"
// });

// Form 
const form = document.getElementById("register");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let fullName = validate.validation(form.fullname, ["required", "alphabet", "min:4", "max:24"]);
    // form.fullname is name input HTML <input name="fullname"/>
    let email = validate.validation(form.email, ["required", "email"]);
    // form.email is name input HTML <input name="email"/>
    let password = validate.validation(form.password, ["required", "min:7"]);
    // form.password is name input HTML <input name="password"/>

    let dataForm = {
        fullname: fullName,
        email: email,
        password: password
    }

    // .check() = Check if all data is valid
    if(validate.check()) {
        // if data isvalid = execute this code
        alert("Success Register");
        console.log(dataForm);

        // you can post data with API in here if all data isvalid
        fetch("http//example.api", {
            method: "POST",
            body: JSON.stringify(dataForm)
        })

        form.reset();
    }

})