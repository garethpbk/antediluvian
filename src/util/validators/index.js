import alphaNumericValidator from './alphaNumericValidator';
import emailValidator from './emailValidator';
import lengthValidator from './lengthValidator';

function initializeValidators() {
  const validators = {
    alphaNumericValidator,
    emailValidator,
    lengthValidator,
  };

  return validators;
}

export default initializeValidators;
