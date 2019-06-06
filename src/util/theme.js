import { rgba } from 'polished';

const theme = {
  colors: {
    // greens
    medGreen: '#a7b09d',
    darkGreen: '#829171',

    // monotones
    black: '#27262a',
    grey: '#eeeeee',
    white: '#ffffff',
  },

  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  typography: {
    weights: {
      thin: '100',
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
  },
};

export const getBreakpoint = breakpoint => props =>
  props.theme.breakpoints[breakpoint];

export const getColor = color => props => props.theme.colors[color];

export const getFontWeight = weight => props =>
  props.theme.typography.weights[weight];

export const getRgba = (color, amount) => props =>
  rgba(props.theme.colors[color], amount);

export default theme;
