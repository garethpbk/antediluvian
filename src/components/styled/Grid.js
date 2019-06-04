import styled from "styled-components/macro";

// import theme helpers
import { getBreakpoint } from "../../util/theme";

const Grid = styled.div`
  margin: 0 auto;

  width: 100%;

  @media (min-width: ${getBreakpoint("sm")}) {
    width: 560px;
  }

  @media (min-width: ${getBreakpoint("md")}) {
    width: 752px;
  }

  @media (min-width: ${getBreakpoint("lg")}) {
    width: 976px;
  }

  @media (min-width: ${getBreakpoint("xl")}) {
    width: 1184px;
  }
`;

export default Grid;
