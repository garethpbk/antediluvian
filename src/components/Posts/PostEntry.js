import React from 'react';

// import styled components
import { PostEntryContent } from './styled';

const PostEntry = ({ post }) => (
  <PostEntryContent>
    <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
    <h3>{post.date}</h3>
  </PostEntryContent>
);

export default PostEntry;
