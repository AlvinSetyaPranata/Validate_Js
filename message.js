class Message {
    constructor(min, max) {
      this.messages = {
        required: "This field must be filled in",
        email: "Email format incorrect",
        number: "This field only accepts numbers",
        alphabet: "This field only accepts letters",
        max: `This field maximal ${max} characters.`,
        min: `This field minimum ${min} characters.`,
        url: "Url invalid",
        lowercase: "This field must be lowercase",
        uppercase: "This field must be uppercase",
        integer: "This field must be integer",
      }
    }
  
    setMessage = (newMessage) => {
      Object.keys(newMessage).map(message => {
        this.messages[message] = newMessage[message];
      });
    }
  }
