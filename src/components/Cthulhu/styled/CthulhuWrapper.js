import styled from 'styled-components/macro';

const CthulhuWrapper = styled.div`
  height: 32px;
  width: 32px;

  &:hover {
    .grey {
      opacity: 0;
    }

    .color {
      animation-play-state: running;

      opacity: 1;
    }
  }
`;

export default CthulhuWrapper;
