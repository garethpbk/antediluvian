import styled from 'styled-components/macro';

// import theme helpers
import { getRgba } from '../../../util/theme';

const PostsWrapper = styled.section`
  background-color: ${getRgba('grey', 0.1)};

  padding: 25px;
`;

export default PostsWrapper;
