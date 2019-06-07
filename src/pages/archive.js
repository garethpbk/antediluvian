import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import { Layout, PostPage, SEO } from '../components';

const ArchivePage = () => {
  const data = useStaticQuery(graphql`
    query GET_ARCHIVE_PAGE_QUERY {
      wordpressPage(slug: { eq: "archive" }) {
        content
        title
      }
    }
  `);

  return (
    <Layout activePage="archive">
      <SEO title="Archive" />
      <PostPage
        content={data.wordpressPage.content}
        title={data.wordpressPage.title}
      />
    </Layout>
  );
};

export default ArchivePage;
