import React, { useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { throttle } from 'throttle-debounce';
import { toHslString } from '@libs/color';

const CIRCLE_RADIUS = 600;

const cx = (x, y) => x;
const cy = (x, y) => y;

const width = (w, h) => 20 / w;
const height = (w, h) => 20 / h;

const StyledSvg = styled(animated.svg)`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

const DotGrid = ({ theme }) => {
  const layerRef = useRef();
  const [props, set] = useSpring(() => ({
    from: {
      opacity: 0
    },
    opacity: 0.18,
    dimensions: [1920, 1080],
    xy: [0, 0]
  }));

  const handleMouseMove = throttle(200, e =>
    set({ xy: [e.clientX, e.clientY] })
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  useEffect(() => {
    const { clientWidth, clientHeight } = layerRef.current;
    const dimensions = [clientWidth, clientHeight];
    set({ dimensions });
  }, []);

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      opacity={props.opacity}
      ref={layerRef}
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        <filter id="dilate">
          <feMorphology operator="dilate" radius="1.1" />
        </filter>
        <radialGradient id="hoverGradient">
          <stop offset="10%" stopColor="#bbb" />
          <stop offset="30%" stopColor="#555" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        <animated.mask id="hoverMask">
          <animated.circle
            cx={props.xy.interpolate(cx)}
            cy={props.xy.interpolate(cy)}
            r={CIRCLE_RADIUS}
            fill="url(#hoverGradient)"
          />
        </animated.mask>
        <animated.pattern
          id="dots"
          x="0"
          y="0"
          width={props.dimensions.interpolate(width)}
          height={props.dimensions.interpolate(height)}
        >
          <rect
            width="1.5"
            height="1.5"
            x="15"
            y="15"
            fill={toHslString(theme.palette.text.primary)}
          />
        </animated.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" filter="url(#blur)" />
      <rect
        width="100%"
        height="100%"
        fill="url(#dots)"
        mask="url(#hoverMask)"
        filter="url(#dilate)"
      />
    </StyledSvg>
  );
};

export default withTheme(DotGrid);
