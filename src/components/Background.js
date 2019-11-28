import React from 'react';
import styled from 'styled-components';
import { toRgbString } from '@libs/color';

const BackgroundSvg = styled.svg`
  z-index: -1;
  position: absolute;
  max-height: 80%;
  transform: rotate(-20deg);
  opacity: 0.3;
`;

const MintCreamStop = styled.stop`
  stop-color: ${({ theme }) => toRgbString(theme.palette.brand.mintCream)};
`;

const PaleGreenStop = styled.stop`
  stop-color: ${({ theme }) => toRgbString(theme.palette.greyscale.black)};
`;

const Background = () => {
  return (
    <BackgroundSvg
      width="100%"
      height="100%"
      viewBox="0 0 758 758"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient id="fillGradient">
        <MintCreamStop />
        <PaleGreenStop offset="75%" />
      </radialGradient>
      <path
        d="M542.908,354.351l-261.003,142.445l142.445,261.002l261.003,-142.444l-142.445,-261.003Z"
        fill="url('#fillGradient')"
      />
      <circle
        cx="601.638"
        cy="166.713"
        r="155.564"
        fill="url('#fillGradient')"
      />
      <path
        d="M340.09,405.425l3.397,-405.425l-343.487,215.401l340.09,190.024Z"
        fill="url('#fillGradient')"
      />
    </BackgroundSvg>
  );
};

export default Background;
