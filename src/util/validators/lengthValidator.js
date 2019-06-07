function lengthValidator(input, maxLength = false) {
  if (maxLength) {
    const isValid = input.length > 0 && input.length <= maxLength;

    return isValid;
  }

  const isValid = input.length > 0;

  return isValid;
}

export default lengthValidator;
