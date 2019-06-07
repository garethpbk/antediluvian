import styled from 'styled-components';

// import theme helpers
import { getRgba } from '../../../util/theme';

const SubmitFormWrapper = styled.div`
  background-color: ${getRgba('grey', 0.25)};

  padding: 40px 25px;
`;

export default SubmitFormWrapper;
