import { createGlobalStyle } from 'styled-components';
import { toHslString, toHslaString } from '../libs/color';
import 'typeface-muli';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Muli', 'Montserrat', sans-serif;
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
