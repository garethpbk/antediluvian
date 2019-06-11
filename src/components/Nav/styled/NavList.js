import styled from 'styled-components';

// import theme helpers
import { getBreakpoint } from '../../../util/theme';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style-type: none;

  margin: 0;
  padding: 0 15px;

  @media (min-width: ${getBreakpoint('lg')}) {
    flex-direction: row;
    align-items: flex-start;

    padding: 0;
  }
`;

export default NavList;
