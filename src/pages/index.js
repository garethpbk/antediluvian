import React from 'react';

// import components
import { Banner, Layout, Nav, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <h1>Home</h1>
    <Nav />
  </Layout>
);

export default IndexPage;
