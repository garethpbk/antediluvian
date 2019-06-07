import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

// import Grid component
import { Grid } from '../../styled';

const FooterContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  p {
    color: ${getColor('white')};
  }
`;

export default FooterContainer;
