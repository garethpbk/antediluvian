import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import hooks
import { useSubmitFormReducer } from '../../hooks';

// import styled components
import {
  SubmitFormError,
  SubmitFormField,
  SubmitFormInput,
  SubmitFormLabel,
  SubmitFormRadioOptions,
  SubmitFormSubmitButton,
  SubmitFormTextArea,
  SubmitFormUploadWrapper,
  SubmitFormWrapper,
} from './styled';

const SubmitForm = () => {
  const data = useStaticQuery(graphql`
    query GET_SUBMIT_FORM_FIELDS_QUERY {
      allSubmitFormFieldsJson {
        nodes {
          error
          label
          maxLength
          name
          options {
            name
            label
          }
          required
          type
          validator
        }
      }
    }
  `);

  const {
    allSubmitFormFieldsJson: { nodes },
  } = data;

  const [submitFormState, dispatch] = useSubmitFormReducer();

  const drawTextField = field => {
    const { error, label, name, validator } = field;

    return (
      <SubmitFormField key={name}>
        <SubmitFormInput
          id={name}
          name={name}
          value={submitFormState[name].value}
          onChange={e =>
            dispatch({
              type: 'handleChange',
              name,
              value: e.target.value,
              validator,
            })
          }
          required
        />
        <SubmitFormLabel className="input-label" htmlFor={name}>
          {label}
        </SubmitFormLabel>
        {submitFormState[name].error ? (
          <SubmitFormError className="error">{error}</SubmitFormError>
        ) : (
          <SubmitFormError>&nbsp;</SubmitFormError>
        )}
      </SubmitFormField>
    );
  };

  const drawTextAreaField = field => {
    const { error, label, maxLength, name, validator } = field;

    /**
     * don't display textarea to include submission if file upload selected
     */
    if (
      name === 'submissionContent' &&
      submitFormState.submissionType.value === 'viaUpload'
    )
      return null;

    return (
      <SubmitFormField key={name}>
        <SubmitFormLabel htmlFor={name}>{label}</SubmitFormLabel>
        <SubmitFormTextArea
          id={name}
          name={name}
          value={submitFormState[name].value}
          onChange={e =>
            dispatch({
              type: 'handleChange',
              name,
              value: e.target.value,
              validator,
              maxLength,
            })
          }
          required
        />
        {submitFormState[name].error ? (
          <SubmitFormError className="error">{error}</SubmitFormError>
        ) : (
          <SubmitFormError>&nbsp;</SubmitFormError>
        )}
      </SubmitFormField>
    );
  };

  const drawRadioField = field => {
    const { error, label, name, options } = field;

    return (
      <SubmitFormField key={name}>
        <SubmitFormLabel htmlFor={name}>{label}</SubmitFormLabel>
        <SubmitFormRadioOptions>
          {options.map(option => (
            <div key={option.name}>
              <input
                type="radio"
                id={option.name}
                name={name}
                value={option.name}
                checked={submitFormState[name].value === option.name}
                onChange={e =>
                  dispatch({
                    type: 'handleChange',
                    name,
                    value: e.target.value,
                  })
                }
              />
              <label htmlFor={option.name}>{option.label}</label>
            </div>
          ))}
        </SubmitFormRadioOptions>
      </SubmitFormField>
    );
  };

  const drawFileUploadField = field => {
    const { error, label, name } = field;

    if (
      name === 'submissionFile' &&
      submitFormState.submissionType.value === 'viaForm'
    )
      return null;

    return (
      <SubmitFormField key={name}>
        <SubmitFormUploadWrapper>
          <SubmitFormLabel htmlFor={name}>{label}</SubmitFormLabel>
          <input
            type="file"
            name={name}
            id={name}
            accept=".doc, .docx, .pdf"
            key={submitFormState[name].value}
            onChange={e =>
              dispatch({
                type: 'handleFileUpload',
                name,
                value: e.target.files[0],
              })
            }
          />
          {submitFormState[name].error ? (
            <SubmitFormError className="error">{error}</SubmitFormError>
          ) : (
            <SubmitFormError>&nbsp;</SubmitFormError>
          )}
        </SubmitFormUploadWrapper>
      </SubmitFormField>
    );
  };

  const drawFields = fields => {
    return fields.map(field => {
      switch (field.type) {
        case 'text':
          return drawTextField(field);
        case 'textarea':
          return drawTextAreaField(field);
        case 'radio':
          return drawRadioField(field);
        case 'file':
          return drawFileUploadField(field);
        default:
          return null;
      }
    });
  };

  return (
    <SubmitFormWrapper>
      <form onSubmit={e => e.preventDefault()}>
        {drawFields(nodes)}
        <SubmitFormSubmitButton>Submit To Antediluvian</SubmitFormSubmitButton>
      </form>
    </SubmitFormWrapper>
  );
};

export default SubmitForm;
