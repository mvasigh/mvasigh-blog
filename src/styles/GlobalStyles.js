import { createGlobalStyle } from 'styled-components';
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
`;

export default GlobalStyles;
