import React, { useRef, useEffect, useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';
import Menu from './Menu';
import Container from './Container';
import { toHslaString } from '@libs/color';
import { debounce } from 'throttle-debounce';

const StyledNavbar = styled.nav.attrs(props => {
  const { palette, type } = props.theme;
  const bgColor = palette.background;
  const forceDark = type !== 'dark' && props.isDark;
  return {
    background: forceDark
      ? css`
          opacity: 0;
          ${media.widescreen`
            opacity: 1;
          `}
        `
      : css`
          opacity: 1;
          background-image: linear-gradient(
            to bottom,
            ${toHslaString([...bgColor, 1])},
            ${toHslaString([...bgColor, 0.9])},
            70%,
            ${toHslaString([...bgColor, 0])}
          );
          ${media.widescreen`
            background-image: none;
          `}
        `
  };
})`
  ${props => props.background}
  position: fixed;
  top: 0;
  z-index: 99;
  transition: ease 0.4s;
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing.multiple(1)};
  padding-bottom: ${({ theme }) => theme.spacing.multiple(1)};
  ${media.widescreen`
    padding-top: ${({ theme }) => theme.spacing.multiple(2)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(2)};
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
  font-size: 1.3em;
  ${media.tablet`
    font-size: 1.7em;
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
  const observer = useRef();
  useEffect(() => {
    if (observer.current instanceof IntersectionObserver) return;
    observer.current = new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    if (!observer.current instanceof IntersectionObserver) return;
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
  const handleIntersection = debounce(100, entries => {
    if (theme.type === 'dark') return;
    for (let entry of entries) {
      if (entry.isIntersecting) {
        return setDark(true);
      }
    }
    return setDark(false);
  });
  useIntersection('pre', handleIntersection, {
    rootMargin: '20% 0% -85% 0%'
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
