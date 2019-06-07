import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import { Layout, PostPage, SEO } from '../components';

const FeaturedStoryPage = () => {
  const data = useStaticQuery(graphql`
    query GET_FEATURED_STORY_PAGE_QUERY {
      wordpressPage(slug: { eq: "featured-story" }) {
        content
        title
        acf {
          author
          title
          year
        }
      }
    }
  `);

  return (
    <Layout activePage="featured-story">
      <SEO title="Featured Story" />
      <PostPage
        content={data.wordpressPage.content}
        title={data.wordpressPage.title}
        featured={true}
        acf={data.wordpressPage.acf}
      />
    </Layout>
  );
};

export default FeaturedStoryPage;
