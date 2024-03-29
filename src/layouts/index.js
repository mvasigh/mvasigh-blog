import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import CodeStyles from '@styles/Code';
import { Background, Navbar, Footer, Container, Main } from '@components';
// import DotGrid from '@components/DotGrid';
import { darkTheme } from '@styles';

const Layout = ({ children, location }) => {
  const showBackButton = Boolean(location.pathname.match(/\/.+\/.+/));
  return (
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
        <ThemeProvider theme={darkTheme}>
          <>
            <Background />
            <GlobalStyles />
            <CodeStyles />
            <Navbar
              showBackButton={showBackButton}
              siteTitle={data.site.siteMetadata.title}
            />
            <Main>
              <Container>{children}</Container>
            </Main>
            <Footer />
          </>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
