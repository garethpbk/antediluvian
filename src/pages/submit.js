import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import { Layout, PostPage, SEO, SubmitForm } from '../components';

const SubmitPage = () => {
  const data = useStaticQuery(graphql`
    query GET_SUBMIT_PAGE_QUERY {
      wordpressPage(slug: { eq: "submit" }) {
        content
        title
      }
    }
  `);

  return (
    <Layout activePage="submit">
      <SEO title="Submit" />
      <PostPage
        content={data.wordpressPage.content}
        title={data.wordpressPage.title}
        extra={<SubmitForm />}
      />
    </Layout>
  );
};

export default SubmitPage;
