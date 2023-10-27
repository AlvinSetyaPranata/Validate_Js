class Validate {
  constructor() {
    this.name_domain = ["gmail.com", "yahoo.com"];
    this.costumMessages;
  }

  setCostumMessage = (messages) => {
    this.costumMessages = messages;
  };

  isFill = (val) => {
    return /\S+/.test(val);
  };

  isAlphabet = (val) => {
    return /^[a-zA-z\s]+$/.test(val);
  };

  isEmail = (val) => {
    return this.name_domain.indexOf(val.split("@")[1]) == -1 ? false : true;
  };

  isNumber = (val) => {
    return /^[0-9]*$/.test(val);
  };

  validation = (val, types, min, max) => {
    this.costumMessages
      ? (this.messages = this.costumMessages)
      : (this.messages = {
          required: "Data harus diisi",
          email: "Format email tidak benar",
          number: "Inputan harus number",
        });

    this.result = {};
    this.validations = {
      required: this.isFill(val),
      email: this.isEmail(val),
      number: this.isNumber(val),
    };

    types.forEach((type) => {
      this.result[type] = this.validations[type];
    });

    this.error = Object.keys(this.result).find(
      (key) => this.result[key] == false
    );
    return this.error !== undefined ? this.messages[this.error] : null;
  };
}

const validate = new Validate();
validate.setCostumMessage({
  required: "please fill the input data",
  email: "adad",
});
console.log(validate.validation("", ["required", "number"]));
console.log(validate.validation("adad.com", ["required", "email"]));
