import React, { useRef, useEffect, useState } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';
import Menu from './Menu';
import Container from './Container';
import Button from './Button';
import { toHslaString } from '@libs/color';

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
            80%,
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
  padding-bottom: ${({ theme }) => theme.spacing.multiple(2)};
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
  font-size: 1.3rem !important;
  text-transform: none !important;
  ${media.tablet`
    font-size: 1.7rem !important;
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

const Navbar = ({ siteTitle, showBackButton, theme, ...props }) => {
  const [isDark, setDark] = useState(false);
  const entries = useRef();
  const handleIntersection = intersections => {
    if (theme.type === 'dark') return;
    if (!entries.current) {
      entries.current = new Map();
    }
    for (let entry of intersections) {
      entries.current.set(entry.target, entry);
    }
    for (let entry of entries.current.values()) {
      if (entry.isIntersecting) {
        return setDark(true);
      }
    }
    return setDark(false);
  };
  useIntersection('pre', handleIntersection, {
    rootMargin: '30% 0% -60% 0%'
  });

  return (
    <StyledNavbar isDark={isDark}>
      <Container>
        <StyledNavbar.Content>
          {showBackButton ? (
            <Button as="a" href="#" onClick={() => window.history.go(-1)}>
              &larr; Back
            </Button>
          ) : (
            <Button as={Link} to="/">
              <Title>{siteTitle}</Title>
            </Button>
          )}
          <Menu />
        </StyledNavbar.Content>
      </Container>
    </StyledNavbar>
  );
};

export default withTheme(Navbar);
