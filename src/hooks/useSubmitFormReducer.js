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
    case 'handleFileUpload':
      if (!value) return { ...state };

      /**
       * get filesize in MB and type of file
       */
      const fileSize = (value.size / 1024 / 1024).toFixed(4);
      const fileType = value.type;

      /**
       * file too big?
       */
      if (fileSize > 5) {
        return {
          ...state,
          submissionFile: {
            ...state.submissionFile,
            error: true,
            touched: true,
            value: '',
          },
        };
      }

      /**
       * file not .pdf or .docx?
       */
      if (
        fileType !== 'application/pdf' &&
        fileType !==
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
        fileType !== 'application/msword'
      ) {
        return {
          ...state,
          submissionFile: {
            ...state.submissionFile,
            error: true,
            touched: true,
            value: '',
          },
        };
      }

      return {
        ...state,
        submissionFile: {
          ...state.submissionFile,
          error: false,
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
    submissionFile: {
      error: false,
      touched: false,
      value: '',
    },
    submissionType: {
      error: false,
      touched: false,
      value: 'viaForm',
    },
  };

  const [submitFormState, dispatch] = useReducer(
    submitFormReducer,
    initialSubmitFormState
  );

  return [submitFormState, dispatch];
}

export default useSubmitFormReducer;
