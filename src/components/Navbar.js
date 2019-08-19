import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';
import Menu from './Menu';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .grow {
    flex-grow: 1;
  }

  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(3)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(3)};
    padding-left: ${({ theme }) => theme.spacing.multiple(4)};
    padding-right: ${({ theme }) => theme.spacing.multiple(4)};
  `}
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 900;
  a,
  a:active,
  a:visited {
    font-family: inherit;
    text-decoration: none;
  }
`;

const Navbar = ({ siteTitle }) => {
  return (
    <StyledNavbar>
      <Title className="grow">
        <Link to="/">{siteTitle}</Link>
      </Title>
      <Menu />
    </StyledNavbar>
  );
};

export default Navbar;
