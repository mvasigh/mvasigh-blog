import { createGlobalStyle } from 'styled-components';
import { toHslString, toHslaString } from '../libs/color';
import 'typeface-muli';
import 'typeface-lato';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Muli', 'Montserrat', sans-serif;
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  html {
    background-color: ${({ theme }) => toHslString(theme.palette.background)};
    color: ${({ theme }) => toHslaString(theme.palette.text.primary)};
  }
  
  a,
  a:visited,
  a:active { 
    color: ${({ theme }) => toHslaString(theme.palette.text.primary)};
  }
`;

export default GlobalStyles;
