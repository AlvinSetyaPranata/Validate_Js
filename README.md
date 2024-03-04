# sans_validate
Simple library client side validation for vanilla js

This libray created using Vanilla js.

# How to Use

## Basic
```js
const validate = new Validate();
```
Init validate library

```js
const form = document.querySelector("form");
```
Get Form element

```js
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
```js
validate.validation({form.name}, [{type validation1}, {type validation2}]);
```
{form.name} its name attribute input in HTML 
```html
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
| url | null |
| lowercase | null |
| uppercase | null |
| integer | null |


## How to Display Error Message
```html
<div data-message="{input.name}"></div>
```
example:
```html
<input type="text" name="email">
<div data-message="email"></div>
```

## For check validation
```js
validate.check()
```
example:
```js
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
## Custom Message
```js
const validate = new Validate(
    {
        required: "its custome message required",
        number: "its custom message number"
    }
);
```
```js
new Validate(
    {
        name_validation: "your message"
    }
);
```
Name validation its like type name validation
