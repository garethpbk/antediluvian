import { createGlobalStyle } from 'styled-components';

// import theme helpers
import { getColor } from '../../util/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: Lato, Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${getColor('medGreen')};
  }

  html {
    font-size: 10px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a, li, p {
    font-size: 1.8rem;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    color: ${getColor('black')};
  }

  input, label, select {
    font-family: Lato, Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
