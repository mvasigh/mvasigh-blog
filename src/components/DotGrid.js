import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const cx = (x, y) => x;
const cy = (x, y) => y;

const Layer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const DotGrid = () => {
  const layerRef = useRef();
  const [dimensions, setDimensions] = useState(null);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: config.stiff
  }));

  useEffect(() => {
    const { clientWidth, clientHeight } = layerRef.current;
    setDimensions([clientWidth, clientHeight]);
  }, []);

  return (
    <Layer
      ref={layerRef}
      onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}
    >
      {dimensions && (
        <animated.svg
          width={dimensions[0]}
          height={dimensions[1]}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
            <radialGradient id="hoverGradient">
              <stop offset="10%" stopColor="#bbb" />
              <stop offset="40%" stopColor="#bbb" />
              <stop offset="100%" stopColor="#333" />
            </radialGradient>
            <animated.mask id="hoverMask">
              <animated.circle
                cx={props.xy.interpolate(cx)}
                cy={props.xy.interpolate(cy)}
                r="200"
                fill="url(#hoverGradient)"
              />
            </animated.mask>
            <pattern
              id="dots"
              x="0"
              y="0"
              width={20 / dimensions[0]}
              height={20 / dimensions[1]}
            >
              <rect width="2" height="2" x="0" y="0" fill="black" />
            </pattern>
          </defs>
          <rect
            width={dimensions[0]}
            height={dimensions[1]}
            fill="url(#dots)"
            opacity="0.075"
            filter="url(#blur)"
          />
          <rect
            width={dimensions[0]}
            height={dimensions[1]}
            fill="url(#dots)"
            mask="url(#hoverMask)"
            opacity="0.175"
          />
        </animated.svg>
      )}
    </Layer>
  );
};

export default DotGrid;
