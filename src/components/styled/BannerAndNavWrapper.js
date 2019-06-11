import styled from 'styled-components';

// import theme helpers
import { getBreakpoint } from '../../util/theme';

const BannerAndNavWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: ${getBreakpoint('lg')}) {
    flex-direction: column;
  }
`;

export default BannerAndNavWrapper;
