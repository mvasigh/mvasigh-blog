import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { toRgbString, toHslString } from '../libs/color';
import { media } from '@styles';

const buttonStyles = props => {
  const textColor = toHslString(props.theme.palette.greyscale.white);
  const bgColor = props.color
    ? toRgbString(props.theme.palette.brand[props.color])
    : 'none';

  return css`
    color: ${textColor};
    padding: 0.6rem 0.4rem;
    text-decoration: none;
    border-radius: 0.2rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;

    ${media.tablet`
      padding: 0.6rem;
      font-size: 1rem;
    `}

    &:hover {
      color: ${props.color
        ? textColor
        : toHslString(props.theme.palette.greyscale.darkGrey)};
      &::after {
        height: 100%;
      }
    }

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 0.2rem;
      background: ${props.color ? bgColor : textColor};
      transform-origin: bottom;
      z-index: -1;
      transition: height 0.2s ease;
    }
  `;
};

const StyledButton = styled.button`
  ${buttonStyles}
`;
const StyledA = styled.a`
  ${buttonStyles}
`;
const StyledLink = styled(Link)`
  ${buttonStyles}
`;

const Button = ({ children, ...props }) => {
  const BtnComponent = props.as || 'button';

  switch (BtnComponent) {
    case 'button':
      return <StyledButton {...props}>{children}</StyledButton>;
    case 'a':
      return <StyledA {...props}>{children}</StyledA>;
    case Link:
      return <StyledLink {...props}>{children}</StyledLink>;
    default:
      return <BtnComponent {...props}>{children}</BtnComponent>;
  }
};

export default Button;
