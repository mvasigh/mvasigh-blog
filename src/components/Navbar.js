import React from 'react';
import styled from 'styled-components';
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
    padding-left: ${({ theme }) => theme.spacing.multiple(6)};
    padding-right: ${({ theme }) => theme.spacing.multiple(6)};
  `}
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 900;
`;

const Navbar = ({ siteTitle }) => {
  return (
    <StyledNavbar>
      <Title className="grow">{siteTitle}</Title>
      <Menu />
    </StyledNavbar>
  );
};

export default Navbar;
