import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../util/theme';

const NavItem = styled.li`
  /**
  * using getColor function in here doesn't work for some reason
  */
  border-bottom: ${props => (props.active ? `3px solid #eeeeee` : null)};

  a {
    color: ${getColor('medGreen')};
    text-decoration: none;

    display: block;

    padding: 20px;
  }

  &:hover {
    background-color: ${getColor('grey')};

    a {
      color: ${getColor('black')};
    }
  }
`;

export default NavItem;
