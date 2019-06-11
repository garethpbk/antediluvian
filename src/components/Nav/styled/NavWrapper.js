import styled from 'styled-components';

// import theme helpers
import { getBreakpoint, getColor } from '../../../util/theme';

const NavWrapper = styled.nav`
  background-color: ${getColor('black')};

  position: fixed;
  top: 60px;
  right: 0px;
  z-index: 99;

  height: 100vh;
  width: ${props => (props.expanded ? '150px' : 0)};

  transition: all 0.25s linear;

  overflow: hidden;

  @media (min-width: ${getBreakpoint('lg')}) {
    border-bottom: 2px solid ${getColor('darkGreen')};

    position: sticky;
    top: 0;

    height: auto;
    width: auto;
  }
`;

export default NavWrapper;
