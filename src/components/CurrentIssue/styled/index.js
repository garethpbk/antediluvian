import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../util/theme';

const CurrentIssuePagesWrapper = styled.div`
  display: flex;

  div {
    &:first-of-type {
      border-right: 2px solid ${getColor('grey')};
    }
  }
`;

export default CurrentIssuePagesWrapper;
