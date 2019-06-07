import { useReducer } from 'react';

// import validators
import initializeValidators from '../util/validators';

const validators = initializeValidators();

const checkIfError = (validator, value, maxLength) => {
  if (!validator) return false;

  return !validators[validator](value, maxLength);
};

function submitFormReducer(state, action) {
  const { maxLength, name, type, validator, value } = action;

  switch (type) {
    case 'handleChange':
      return {
        ...state,
        [name]: {
          error: checkIfError(validator, value, maxLength),
          touched: true,
          value,
        },
      };
    case 'addError':
      return {
        ...state,
        [name]: {
          error: true,
          ...state[name],
        },
      };
    default:
      return { ...state };
  }
}

function useSubmitFormReducer() {
  const initialSubmitFormState = {
    fullName: {
      error: false,
      touched: false,
      value: '',
    },
    emailAddress: {
      error: false,
      touched: false,
      value: '',
    },
    authorBio: {
      error: false,
      touched: false,
      value: '',
    },
    submissionTitle: {
      error: false,
      touched: false,
      value: '',
    },
    submissionContent: {
      error: false,
      touched: false,
      value: '',
    },
  };

  const [submitFormState, dispatch] = useReducer(
    submitFormReducer,
    initialSubmitFormState
  );

  return [submitFormState, dispatch];
}

export default useSubmitFormReducer;
