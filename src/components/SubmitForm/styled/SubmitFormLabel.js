import styled from 'styled-components';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const SubmitFormLabel = styled.label`
  color: ${getColor('black')};
  font-size: 1.6rem;
  font-weight: ${getFontWeight('medium')};

  display: inline-block;

  padding: 0 5px;

  pointer-events: none;

  &.input-label {
    font-weight: ${getFontWeight('regular')};

    transform: translate3d(0, -25px, 0);
    transition: all 0.25s linear;
  }
`;

export default SubmitFormLabel;
