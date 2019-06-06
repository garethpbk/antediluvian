import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../../util/theme';

// import styled components
import { GlobalStyles, Grid, PageLayout } from '../styled';
import Banner from '../Banner';
import Nav from '../Nav';

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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Banner />
          <Nav />
          <main>
            <Grid>
              <PageLayout>
                {children}
                <div style={{ backgroundColor: 'steelblue', height: '500px' }}>
                  Sidebar
                </div>
              </PageLayout>
            </Grid>
          </main>
          <footer>© {new Date().getFullYear()}</footer>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
