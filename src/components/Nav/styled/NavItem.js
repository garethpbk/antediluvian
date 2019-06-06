import styled from 'styled-components/macro';

// import theme helpers
import { getColor } from '../../../util/theme';

const NavItem = styled.li`
  a {
    color: ${getColor('medGreen')};
    font-size: 1.8rem;
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
