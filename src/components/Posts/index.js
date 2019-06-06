import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

// import components
import PostEntry from './PostEntry';

// import styled components
import { PostsWrapper } from './styled';

const Posts = () => {
  const data = useStaticQuery(graphql`
    query GET_ADL_POSTS_QUERY {
      allWordpressPost(
        filter: { categories: { eq: 4 } }
        sort: { fields: id, order: ASC }
      ) {
        edges {
          node {
            date(formatString: "MMMM Do, YYYY")
            id
            path
            title
          }
        }
      }
    }
  `);

  return (
    <PostsWrapper aria-label="posts">
      {data.allWordpressPost.edges.map(post => (
        <PostEntry key={post.node.id} post={post.node} />
      ))}
    </PostsWrapper>
  );
};

export default Posts;
