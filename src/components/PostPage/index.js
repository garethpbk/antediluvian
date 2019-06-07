import React from 'react';

// import styled components
import { PostPageContent, PostPageWrapper } from './styled';

const drawFeaturedStoryFields = fields => (
  <>
    <h2 className="featured-title">{fields.title}</h2>
    <h3>
      {fields.author}, {fields.year}
    </h3>
  </>
);

const PostPage = ({ acf = false, content, date, featured = false, title }) => (
  <PostPageWrapper aria-label="post-content">
    <PostPageContent>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      {date ? <h2>{date}</h2> : null}
      {featured ? drawFeaturedStoryFields(acf) : null}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostPageContent>
  </PostPageWrapper>
);

export default PostPage;
