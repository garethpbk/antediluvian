import styled from 'styled-components';

// import theme helpers
import { getBreakpoint, getColor } from '../../../util/theme';

const NavToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.expanded ? getColor('black') : 'transparent'};

  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  width: 150px;
  height: 60px;

  transition: all 0.25s linear;

  cursor: pointer;

  @media (min-width: ${getBreakpoint('lg')}) {
    display: none;
  }
`;

export default NavToggle;
