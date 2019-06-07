import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const SidebarItem = styled.div`
  background-color: ${getColor('darkGreen')};

  margin: 0 0 50px 0;
  padding: 25px 40px;

  a {
    color: ${getColor('black')};
  }

  h3,
  h4 {
    font-weight: ${getFontWeight('regular')};
  }

  h3 {
    font-size: 2.5rem;

    margin: 0 0 1.5rem 0;

    border-bottom: 1px solid ${getColor('black')};
  }

  h4 {
    font-size: 2rem;
  }
`;

export default SidebarItem;
