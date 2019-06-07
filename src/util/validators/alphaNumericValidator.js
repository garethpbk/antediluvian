function alphaNumericValidator(input) {
  const regexpTest = /^[\w\-\s]+$/;
  const isValid = regexpTest.test(input) && input.length > 0;

  return isValid;
}

export default alphaNumericValidator;
