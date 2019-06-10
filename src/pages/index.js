import React from 'react';

// import components
import { Layout, Posts, SEO } from '../components';

const IndexPage = () => (
  <Layout activePage="adl">
    <SEO title="Home" />
    <Posts />
  </Layout>
);

export default IndexPage;
