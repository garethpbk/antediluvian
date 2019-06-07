import styled from 'styled-components';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const SubmitFormInput = styled.input`
  background-color: transparent;

  border: 0;
  border-bottom: 2px solid ${getColor('darkGreen')};

  color: ${getColor('black')};
  font-size: 1.6rem;
  font-weight: ${getFontWeight('medium')};

  display: block;

  width: 100%;

  padding: 6px 5px;

  transition: all 0.25s linear;

  &:hover,
  &:focus {
    border-bottom: 2px solid ${getColor('medGreen')};
  }

  &:focus,
  &:valid {
    ~ label {
      font-weight: ${getFontWeight('medium')};

      transform: translate3d(0, -55px, 0);
    }
  }
`;

export default SubmitFormInput;
