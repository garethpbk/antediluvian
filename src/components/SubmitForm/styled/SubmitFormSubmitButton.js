import styled from 'styled-components';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const SubmitFormSubmitButton = styled.button`
  background-color: ${getColor('darkGreen')};

  border: 2px solid ${getColor('medGreen')};

  color: ${getColor('white')};
  font-size: 1.8rem;
  font-weight: ${getFontWeight('medium')};

  padding: 15px;

  cursor: pointer;

  &:hover {
    background-color: ${getColor('white')};

    color: ${getColor('darkGreen')};
  }
`;

export default SubmitFormSubmitButton;
