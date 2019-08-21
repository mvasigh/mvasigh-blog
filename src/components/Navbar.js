import React, { useRef, useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';
import Menu from './Menu';
import Container from './Container';
import { toHslaString, toHslString } from '@libs/color';

const StyledNavbar = styled.nav.attrs(props => {
  const { palette, type } = props.theme;
  const bgColor =
    type === 'dark' ? palette.greyscale.black : palette.greyscale.white;
  const forceDark = type !== 'dark' && props.isDark;
  return { bgColor, forceDark };
})`
  position: fixed;
  ${props =>
    !props.forceDark
      ? `
  opacity: 1;
  background-image: linear-gradient(
    to bottom,
    ${toHslaString([...props.bgColor, 1])},
    ${toHslaString([...props.bgColor, 0.9])}, 70%,
    ${toHslaString([...props.bgColor, 0])}
  );
  `
      : `
  opacity: 0;
  `}

  top: 0;
  z-index: 99;
  transition: all 0.3s;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.multiple(1)};
  padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(1)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
  `}
  ${media.tablet`
    padding-top: ${({ theme }) => theme.spacing.multiple(1)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
  `}

  .grow {
    flex-grow: 1;
  }
`;

StyledNavbar.Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  ${media.tablet`
    font-size: 1.7rem;
  `}
  font-weight: 900;
  a,
  a:active,
  a:visited {
    font-family: inherit;
    text-decoration: none;
  }
`;

function useIntersection(selector, callback = () => {}, options = {}) {
  const observer = useRef(new IntersectionObserver(callback, options));
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    for (let target of targets) {
      observer.current.observe(target);
    }
    return () => {
      for (let target of targets) {
        observer.current.unobserve(target);
      }
    };
  });
}

const Navbar = ({ siteTitle, theme }) => {
  const [isDark, setDark] = useState(false);
  const handleIntersection = entries => {
    if (theme.type === 'dark') return;
    for (let entry of entries) {
      if (entry.isIntersecting) {
        return setDark(true);
      }
    }
    return setDark(false);
  };
  useIntersection('pre', handleIntersection, {
    rootMargin: '0% 0% -85% 0%'
  });

  return (
    <StyledNavbar isDark={isDark}>
      <Container>
        <StyledNavbar.Content>
          <Title className="grow">
            <Link to="/">{siteTitle}</Link>
          </Title>
          <Menu />
        </StyledNavbar.Content>
      </Container>
    </StyledNavbar>
  );
};

export default withTheme(Navbar);
