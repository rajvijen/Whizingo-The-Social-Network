const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 to 300 chars";
  }
  if (Validator.isEmpty(data.text)) {
    errors.text = "text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
