import React, { useRef, useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { throttle } from 'throttle-debounce';
import { toHslString } from '@libs/color';

const cx = (x, y) => x;
const cy = (x, y) => y;

const CIRCLE_RADIUS = 600;

const Layer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const DotGrid = ({ theme }) => {
  console.log(theme);
  const layerRef = useRef();
  const [dimensions, setDimensions] = useState(null);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.stiff
  }));

  const handleMouseMove = throttle(200, e =>
    set({ xy: [e.clientX, e.clientY] })
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  useEffect(() => {
    const { clientWidth, clientHeight } = layerRef.current;
    setDimensions([clientWidth, clientHeight]);
  }, []);

  return (
    <Layer ref={layerRef}>
      {dimensions && (
        <animated.svg
          width={dimensions[0]}
          height={dimensions[1]}
          xmlns="http://www.w3.org/2000/svg"
          opacity="0.15"
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
            <pattern
              id="dots"
              x="0"
              y="0"
              width={25 / dimensions[0]}
              height={25 / dimensions[1]}
            >
              <rect
                width="1.5"
                height="1.5"
                x="15"
                y="15"
                fill={toHslString(theme.palette.text.primary)}
              />
            </pattern>
          </defs>
          <rect
            width={dimensions[0]}
            height={dimensions[1]}
            fill="url(#dots)"
            filter="url(#blur)"
          />
          <rect
            width={dimensions[0]}
            height={dimensions[1]}
            fill="url(#dots)"
            mask="url(#hoverMask)"
            filter="url(#dilate)"
          />
        </animated.svg>
      )}
    </Layer>
  );
};

export default withTheme(DotGrid);
