import styled from 'styled-components/macro';

// import theme helpers
import { getColor, getFontWeight } from '../../../util/theme';

const PostEntryContent = styled.div`
  border-bottom: 1px solid ${getColor('darkGreen')};

  padding: 15px 0;

  a {
    color: ${getColor('black')};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: ${getFontWeight('regular')};
    padding: 0 0 0.5rem 0;
  }

  h3 {
    font-size: 2rem;
    font-style: italic;
    font-weight: ${getFontWeight('light')};
  }
`;

export default PostEntryContent;
