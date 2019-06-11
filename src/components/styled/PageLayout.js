import styled from 'styled-components';

// import theme helpers
import { getBreakpoint } from '../../util/theme';

const PageLayout = styled.div`
  padding: 25px 0 0 0;

  display: grid;

  grid-template-columns: 1fr;

  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: 5fr 2fr;
    grid-column-gap: 35px;
  }
`;

export default PageLayout;
