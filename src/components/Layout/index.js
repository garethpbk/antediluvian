import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import theme from '../../util/theme';

// import styled components
import { BannerAndNavWrapper, GlobalStyles, Grid, PageLayout } from '../styled';
import Banner from '../Banner';
import Footer from '../Footer';
import Nav from '../Nav';
import Sidebar from '../Sidebar';

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
          <BannerAndNavWrapper>
            <Banner />
            <Nav activePage={activePage} />
          </BannerAndNavWrapper>
          <main>
            <Grid>
              <PageLayout>
                {children}
                <Sidebar />
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
