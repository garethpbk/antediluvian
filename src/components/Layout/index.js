import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../../util/theme';

// import styled components
import { GlobalStyles, Grid, PageLayout } from '../styled';
import Banner from '../Banner';
import Footer from '../Footer';
import Nav from '../Nav';

const Layout = ({ activePage, children }) => (
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
          <Nav activePage={activePage} />
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
          <Footer />
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
