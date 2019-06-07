import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import hooks
import { useSubmitFormReducer } from '../../hooks';

const SubmitForm = () => {
  const data = useStaticQuery(graphql`
    query GET_SUBMIT_FORM_FIELDS_QUERY {
      allSubmitFormFieldsJson {
        nodes {
          error
          label
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
      <div key={name}>
        <input
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
        />
        <label htmlFor={name}>{label}</label>
        {submitFormState[name].error ? (
          <p className="error">{error}</p>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    );
  };

  const drawFields = fields => {
    return fields.map(field => {
      switch (field.type) {
        case 'text':
          return drawTextField(field);
        default:
          return null;
      }
    });
  };

  return <div>{drawFields(nodes)}</div>;
};

export default SubmitForm;
