import styled from 'styled-components';

// import theme helpers
import { getColor } from '../../../util/theme';

const CurrentIssueControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 25px 100px;

  span {
    font-size: 5rem;

    cursor: pointer;

    &:hover {
      filter: drop-shadow(3px 3px 3px ${getColor('medRed')});
    }
  }
`;

export default CurrentIssueControlsWrapper;
