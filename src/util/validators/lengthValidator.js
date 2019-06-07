function lengthValidator(input, length = 0) {
  const isValid = input.length > length;

  return isValid;
}

export default lengthValidator;
