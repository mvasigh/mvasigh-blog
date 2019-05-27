import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { media } from '@styles';

const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  .grow {
    flex-grow: 1;
  }

  ${media.desktop`
    padding-top: ${({ theme }) => theme.spacing.multiple(4)};
    padding-bottom: ${({ theme }) => theme.spacing.multiple(4)};
    padding-left: ${({ theme }) => theme.spacing.multiple(8)};
    padding-right: ${({ theme }) => theme.spacing.multiple(8)};
  `}
`;

const Menu = styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    font-weight: 900;
    font-size: 1.2rem;
    text-transform: uppercase;

    a {
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.multiple(6)};
    }
  }
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 900;
`;

const Navbar = ({ siteTitle }) => {
  return (
    <StyledNavbar>
      <Title className="grow">{siteTitle}</Title>
      <Menu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="page-2">Page 2</Link>
        </li>
        <li>
          <Link to="page-2">Page 3</Link>
        </li>
      </Menu>
    </StyledNavbar>
  );
};

export default Navbar;
