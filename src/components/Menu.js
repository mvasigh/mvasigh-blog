import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// TODO: add transitions for menu items with useTransition

const StyledMenu = styled.ul`
  list-style-type: none;
  li {
    display: inline-block;
    font-size: 1rem;

    a {
      text-decoration: none;
    }

    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.multiple(4)};
    }
  }
`;
const Menu = () => {
  return (
    <StyledMenu>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="page-2">Page 2</Link>
      </li>
      <li>
        <Link to="page-2">Page 3</Link>
      </li>
    </StyledMenu>
  );
};

export default Menu;
