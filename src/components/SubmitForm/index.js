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
  SubmitFormTextArea,
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

  const drawFields = fields => {
    return fields.map(field => {
      switch (field.type) {
        case 'text':
          return drawTextField(field);
        case 'textarea':
          return drawTextAreaField(field);
        default:
          return null;
      }
    });
  };

  return (
    <SubmitFormWrapper>
      <form onSubmit={e => e.preventDefault()}>{drawFields(nodes)}</form>
    </SubmitFormWrapper>
  );
};

export default SubmitForm;
