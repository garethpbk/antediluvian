import styled from 'styled-components';

// import theme helpers
import { getBreakpoint } from '../../../util/theme';

const SidebarWrapper = styled.aside`
  padding: 0 40px;

  @media (min-width: ${getBreakpoint('lg')}) {
    padding: 0;
  }
`;

export default SidebarWrapper;
