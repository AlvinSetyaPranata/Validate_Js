class Validate {
  constructor(customMessage) {
    this.customMessage = customMessage || {};
    this.name_domain = ["gmail.com", "yahoo.com"];
    this.errors = {};
  }

  isFill = (val) => {
    return /\S+/.test(val);
  }

  isAlphabet = (val) => {
    return /^[a-zA-z\s]+$/.test(val);
  }
  
  isLowerCase = (val) => {
    return val === val.toLowerCase()
  }

  isUpperCase = (val) => {
    return val === val.toUpperCase()
  }

  isInteger = (val) => {
    return Number.isInteger(val)
  }

  isUrl = (url) => {
    return /^(http|ftp)s?:\/\/((?=.{3,253}$)(localhost|(([^ ]){1,63}\.[^ ]+)))$/.test(url)
  }

  isEmail = (val) => {
    return this.name_domain.indexOf(val.split("@")[1]) == -1 ? false : true;
  }

  isNumber = (val) => {
    return /^[0-9]*$/.test(val);
  }

  sizeData = (form, max) => {
    return parseInt(form.files[0].size / 1024) <= max;
  }

  isImage = (form) => {
    return form.files[0].type.includes("image");
  }

  maxData(val, max) {
    return val.length < max;
  }

  minData(val, min) {
    return val.length > min;
  }

  displayMessage = (form, message) => {
    document.querySelector(`[data-message=${form.name}]`).innerText = message;
  }

  check = () => {
    const checks = Object.values(this.errors);
    return checks.filter((check) => check !== undefined).length === 0;
  }

  validation = (form, types) => {
    this.val = form.value;
    this.result = {};
    this.validations = {
      required: this.isFill(this.val),
      email: this.isEmail(this.val),
      number: this.isNumber(this.val),
      alphabet: this.isAlphabet(this.val),
      url: this.isUrl(this.val),
      lowercase: this.isLowerCase(this.val),
      uppercase: this.isUpperCase(this.val),
      integer: this.isInteger(this.val),
      image: this.isImage(form),
    };

    types.forEach((type) => {
      if(type.includes("min")) {
        this.min = type.split(":")[1];
        this.result["min"] = this.minData(this.val, this.min);
      } else if (type.includes("max")) {
        this.max = type.split(":")[1];
        this.result["max"] = this.maxData(this.val, this.max);
      } else if (type.includes("size")) {
        this.size = type.split(":")[1];
        this.result["size"] = this.sizeData(form, this.size);
      }

      this.result[type] = this.validations[type];
    });

    this.error = Object.keys(this.result).find(
      (key) => this.result[key] == false
    );

    const message = new Message(this.min, this.max, this.size);
    message.setMessage(this.customMessage);

    this.errors[form.name] = this.error;
    this.message = this.error !== undefined ? message.messages[this.error] : "";
    this.displayMessage(form, this.message);

    return this.val;
  }
}
