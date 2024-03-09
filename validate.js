class Validate {
  constructor(customMessage) {
    this.customMessage = customMessage || {};
    this.name_domain = ["gmail.com", "yahoo.com"];
    this.errors = {};
  }

  isFill = (form) => {
    return /\S+/.test(form.value);
  };

  isAlphabet = (form) => {
    return /^[a-zA-z\s]+$/.test(form.value);
  };

  isLowerCase = (form) => {
    return form.value === form.value.toLowerCase();
  };

  isUpperCase = (form) => {
    return form.value === form.value.toUpperCase();
  };

  isInteger = (form) => {
    return Number.isInteger(parseFloat(form.value));
  };

  isUrl = (form) => {
    return /^(http|ftp)s?:\/\/((?=.{3,253}$)(localhost|(([^ ]){1,63}\.[^ ]+)))$/.test(
      form.value
    );
  };

  isEmail = (form) => {
    return this.name_domain.indexOf(form.value.split("@")[1]) == -1
      ? false
      : true;
  };

  isNumber = (form) => {
    console.log("as");
    return /^[0-9]*$/.test(form.value);
  };

  sizeData = (form, max) => {
    return parseInt(form.files[0].size / 1024) <= max;
  };

  isImage = (form) => {
    return form.files[0].type.includes("image");
  };

  extension = (form, types) => {
    return (
      types
        .split("|")
        .filter((type) =>
          form.files[0].name.split(".").slice(-1).includes(type)
        ).length === 1
    );
  };

  maxData(form, max) {
    return form.value.length <= max;
  }

  minData(form, min) {
    return form.value.length >= min;
  }

  displayMessage = (form, message) => {
    document.querySelector(`[data-message=${form.name}]`).innerText = message;
  };

  check = () => {
    const checks = Object.values(this.errors);
    return checks.filter((check) => check !== undefined).length === 0;
  };

  validation = (form, types) => {
    this.result = {};
    this.validations = {
      required: this.isFill,
      email: this.isEmail,
      number: this.isNumber,
      alphabet: this.isAlphabet,
      url: this.isUrl,
      lowercase: this.isLowerCase,
      uppercase: this.isUpperCase,
      integer: this.isInteger,
      image: this.isImage,
    };

    types.forEach((type) => {
      if (type.includes("min")) {
        this.min = type.split(":")[1];
        this.result["min"] = this.minData(form, this.min);
      } else if (type.includes("max")) {
        this.max = type.split(":")[1];
        this.result["max"] = this.maxData(form, this.max);
      } else if (type.includes("size")) {
        this.size = type.split(":")[1];
        this.result["size"] = this.sizeData(form, this.size);
      } else if (type.includes("ext")) {
        this.formats = type.split(":")[1];
        this.result["ext"] = this.extension(form, this.formats);
      } else {
        this.result[type] = this.validations[type](form);
      }
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
  };
}
