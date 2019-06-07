import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../util/theme';

const SubmitFormError = styled.p`
  color: ${getColor('medRed')};

  margin: 0;
  padding: 0 0 10px 0;
`;

export default SubmitFormError;
