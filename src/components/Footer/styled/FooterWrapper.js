import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const FooterWrapper = styled.footer`
  background-color: ${getColor('black')};

  height: 100px;

  margin: 50px 0 0 0;
`;

export default FooterWrapper;
