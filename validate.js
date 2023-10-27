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

  displayMessage = (form, message) => {
    document.querySelector(`[data-message=${form.name}]`).innerText = message;
  } 

  validation = (form, types, min, max) => {
    this.val = form.value;
    this.costumMessages
      ? (this.messages = this.costumMessages)
      : (this.messages = {
          required: "Data harus diisi",
          email: "Format email tidak benar",
          number: "Inputan harus number",
        });

    this.result = {};
    this.validations = {
      required: this.isFill(this.val),
      email: this.isEmail(this.val),
      number: this.isNumber(this.val),
    };

    types.forEach((type) => {
      this.result[type] = this.validations[type];
    });

    this.error = Object.keys(this.result).find(
      (key) => this.result[key] == false
    );
    this.message = this.error !== undefined ? this.messages[this.error] : "";
    this.displayMessage(form, this.message);
  };
}