# sans_validate
Simple library client side validation for vanilla js

This libray created using Vanilla js.

# How to Use

## Basic
```
const validate = new Validate();
```
Init validate library

```
const form = document.querySelector("form");
```
Get Form element

```
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = validate.validation(form.name, ["required", "alphabet", "min:5"]);
    const email = validate.validation(form.email, ["required", "email", "max:10"]);

    const dataForm = {
        name: name,
        email: email
    }
}
```
```
validate.validation({form.name}, [{type validation1}, {type validation2}]);
```
{form.name} its name attribute input in HTML 
```
<input type="text" name="name">
<input type="text" name="email">
```

| Type validation   | Description   |
|-----------|-----------|
| required  | null  |
| email  | null  |
| number  | null  |
| alphabet  | null  |
| min:5  | null  |
| max:13  | null  |


```
    if(validate.check()) {
        fetch("http://example/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForm)
        })
    }
})
```
