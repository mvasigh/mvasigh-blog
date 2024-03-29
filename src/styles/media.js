import { css } from 'styled-components';

const sizes = {
  widescreen: 1440,
  desktop: 992,
  tablet: 768,
  phone: 410
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
