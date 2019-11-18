import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuStyles = styled.ul`
  list-style-type: none;
`;

MenuStyles.Item = styled.li`
  display: inline-block;
  font-size: 1em;

  a {
    font-family: 'Muli', sans-serif;
    font-weight: 700;
    padding: 0.4em 0.8em;
    height: 100%;
    width: 100%;
    display: inline-block;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.multiple(1)};
  }
`;

// TODO: add social links to navbar
const Menu = () => {
  return (
    <MenuStyles>
      <MenuStyles.Item>
        {/* <Link to="/articles">Articles</Link> */}
      </MenuStyles.Item>
    </MenuStyles>
  );
};

export default Menu;
