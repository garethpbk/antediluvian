import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../util/theme';

const NavMobileIcon = styled.div`
  height: 20px;
  width: 40px;

  position: relative;

  span {
    display: block;

    position: absolute;
    left: 0;

    height: 3px;
    width: 100%;

    background-color: ${getColor('white')};

    border-radius: 3px;

    opacity: 1;

    transform: rotate(0deg);

    transition: all 0.25s linear;

    &:first-child {
      top: ${props => (props.expanded ? '10px' : '0px')};

      transform: ${props => (props.expanded ? 'rotate(135deg)' : null)};
    }

    &:nth-child(2) {
      top: 10px;
      left: ${props => (props.expanded ? '-60px' : null)};

      opacity: ${props => (props.expanded ? 0 : 1)};
    }

    &:nth-child(3) {
      top: ${props => (props.expanded ? '10px' : '20px')};

      transform: ${props => (props.expanded ? 'rotate(-135deg)' : null)};
    }
  }
`;
export default NavMobileIcon;
