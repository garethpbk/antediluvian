import React from 'react';
import { Link } from 'gatsby';

// import styled components
import { PostEntryContent } from './styled';

const PostEntry = ({ post }) => (
  <PostEntryContent>
    <Link to={post.path}>
      <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
      <h3>{post.date}</h3>
    </Link>
  </PostEntryContent>
);

export default PostEntry;
