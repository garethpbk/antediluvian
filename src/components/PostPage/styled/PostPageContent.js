import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const PostPageContent = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: ${getFontWeight('regular')};
    padding: 0 0 0.5rem 0;
    margin: 0 0 1rem 0;

    border-bottom: 1px solid ${getColor('black')};
  }

  h2 {
    font-size: 3rem;
    font-style: italic;
    font-weight: ${getFontWeight('light')};

    &.featured-title {
      font-weight: ${getFontWeight('regular')};
      padding: 0 0 0.5rem 0;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: ${getFontWeight('regular')};
  }
`;

export default PostPageContent;
