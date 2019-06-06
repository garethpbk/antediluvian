import styled from 'styled-components/macro';

// import theme helpers
import { getFontWeight } from '../../../util/theme';

const PostPageContent = styled.div`
  h1 {
    font-size: 4rem;
    font-weight: ${getFontWeight('regular')};
    padding: 0 0 0.5rem 0;
  }

  h2 {
    font-size: 3rem;
    font-style: italic;
    font-weight: ${getFontWeight('light')};
  }

  p {
    font-size: 1.8rem;
  }
`;

export default PostPageContent;
