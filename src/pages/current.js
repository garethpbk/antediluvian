import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import { Layout, PostPage, SEO } from '../components';

const CurrentPage = () => {
  const data = useStaticQuery(graphql`
    query GET_CURRENT_PAGE_QUERY {
      wordpressPage(slug: { eq: "current" }) {
        content
        title
      }
    }
  `);

  return (
    <Layout activePage="current">
      <SEO title="Current" />
      <PostPage
        content={data.wordpressPage.content}
        title={data.wordpressPage.title}
      />
    </Layout>
  );
};

export default CurrentPage;
