import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const NavWrapper = styled.nav`
  background-color: ${getColor('black')};

  border-bottom: 2px solid ${getColor('darkGreen')};
`;

export default NavWrapper;
