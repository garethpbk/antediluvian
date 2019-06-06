import React from 'react';

// import components
import { Layout, Posts, SEO } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
  </Layout>
);

export default IndexPage;
