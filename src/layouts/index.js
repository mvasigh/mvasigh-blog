import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/GlobalStyles';
import CodeStyles from '@styles/Code';
import { Navbar, Footer, Container, Main } from '@components';
// import DotGrid from '@components/DotGrid';
import { darkTheme } from '@styles';
import { toRgbString } from '@libs/color';

const BackgroundImageSvg = styled.svg`
  z-index: -1;
  position: absolute;
  top: -5vh;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;
  max-height: 100vh;
  height: 100vh;
  fill: ${({ theme }) => toRgbString(theme.palette.brand.mintCream)};
  opacity: 0.3;
`;

const BackgroundImage = () => {
  // get the triangle
  const triPoint1 = [200, 60];
  const triPoint2 = [0, 400];
  const triPoint3 = [400, 400];

  // get the square
  const rectX = 500;
  const rectY = 500;
  const rectWidth = 320;
  const rectHeight = 320;

  return (
    <BackgroundImageSvg viewBox="0 0 900 700">
      <polygon
        points={`${[triPoint1, triPoint2, triPoint3]
          .map(tri => tri.join(','))
          .join(' ')}`}
        transform="rotate(15, 400, 400)"
      />
      <circle
        cx="630"
        cy="500"
        r="160"
        transform={`rotate(30, ${rectX + rectWidth / 2}, ${rectY +
          rectHeight / 2})`}
      />
    </BackgroundImageSvg>
  );
};

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
            <BackgroundImage />
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
