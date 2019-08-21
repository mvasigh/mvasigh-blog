/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import CodeStyles from '@styles/Code';
import { Navbar, Footer, Container, Main } from '@components';
// import DotGrid from '@components/DotGrid';
import { lightTheme, darkTheme } from '@styles';

// Dot Grid idea is too distracting :(

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={lightTheme}>
        <>
          <GlobalStyles />
          <CodeStyles />
          <Navbar siteTitle={data.site.siteMetadata.title} />
          {/* <DotGrid /> */}
          <Main>
            <Container>{children}</Container>
          </Main>
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
