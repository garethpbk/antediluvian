import React from 'react';

// import components
import { Banner, Layout, Nav, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Banner />
    <h1>About</h1>
    <Nav />
  </Layout>
);

export default IndexPage;
