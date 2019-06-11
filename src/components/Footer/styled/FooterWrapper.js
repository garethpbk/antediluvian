import styled from 'styled-components';

// import theme helpers
import { getBreakpoint, getColor } from '../../../util/theme';

const FooterWrapper = styled.footer`
  background-color: ${getColor('black')};

  margin: 50px 0 0 0;
  padding: 15px 40px;

  @media (min-width: ${getBreakpoint('lg')}) {
    height: 100px;

    padding: 0;
  }
`;

export default FooterWrapper;
