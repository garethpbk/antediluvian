import React from 'react';

// import components
import { Banner, Layout, Nav, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Nav />
  </Layout>
);

export default IndexPage;
