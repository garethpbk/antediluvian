import React from 'react';

// import components
import { Layout, PostPage, SEO } from '../components';

const PostTemplate = ({ pageContext: { content, date, title } }) => {
  return (
    <Layout>
      <SEO title="Post" />
      <PostPage content={content} date={date} title={title} />
    </Layout>
  );
};

export default PostTemplate;
