import styled from 'styled-components';

// import theme helpers
import { getBreakpoint, getColor } from '../../../util/theme';

// import Grid component
import { Grid } from '../../styled';

const FooterContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  @media (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
  }

  p {
    color: ${getColor('white')};
  }
`;

export default FooterContainer;
