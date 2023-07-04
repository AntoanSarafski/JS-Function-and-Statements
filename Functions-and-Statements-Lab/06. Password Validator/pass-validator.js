function isWrongLength(text) {
  return text.length < 6 || text.length > 10;
}

function isAlphaNumeric(text) {
  return text.match("^[A-Za-z0-9]+$");
}

function hasAtLeastTwoDigits(text) {
  const digitCount = text.match(/\d/g);
  return digitCount ? digitCount.length >= 2 : false;
}

function validatePassword(password) {
  const errors = [];

  if (isWrongLength(password)) {
    errors.push("Password must be between 6 and 10 characters");
  }
  if (!isAlphaNumeric(password)) {
    errors.push("Password must consist only of letters and digits");
  }

  if (!hasAtLeastTwoDigits(password)) {
    errors.push("Password must have at least 2 digits");
  }

  if (errors.length > 0) {
    console.log(errors.join("\n"));
    return;
  }

  console.log("Password is valid");
}

validatePassword("ajkh29");
