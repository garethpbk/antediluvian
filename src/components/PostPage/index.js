import React from 'react';

// import styled components
import { PostPageContent, PostPageWrapper } from './styled';

const PostPage = ({ content, date, title }) => (
  <PostPageWrapper aria-label="post-content">
    <PostPageContent>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {date ? <h2>{date}</h2> : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostPageContent>
  </PostPageWrapper>
);

export default PostPage;
