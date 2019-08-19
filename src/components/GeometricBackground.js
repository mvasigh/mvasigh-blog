import React from 'react';
import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';

const StyledSvg = styled(animated.svg)`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

const GeometricBackground = () => {
  return <StyledSvg xmlns="http://www.w3.org/2000/svg" />;
};

export default GeometricBackground;
