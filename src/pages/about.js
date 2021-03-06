import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import { Layout, PostPage, SEO } from '../components';

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query GET_ABOUT_PAGE_QUERY {
      wordpressPage(slug: { eq: "about" }) {
        content
        title
      }
    }
  `);

  return (
    <Layout activePage="about">
      <SEO title="About" />
      <PostPage
        content={data.wordpressPage.content}
        title={data.wordpressPage.title}
      />
    </Layout>
  );
};

export default AboutPage;
