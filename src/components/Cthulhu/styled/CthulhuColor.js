import styled, { keyframes } from 'styled-components/macro';

// import sprites
import cthulhuColorSprites from '../../../images/cthulhu-color-sprites.png';

const play = keyframes`
  100% {
    background-position: -64px;
  }
`;

const CthulhuColor = styled.div`
  position: absolute;
  z-index: 98;

  opacity: 0;

  height: 32px;
  width: 32px;

  background-image: url(${cthulhuColorSprites});

  animation: ${play} 0.5s steps(2) infinite;
  animation-play-state: paused;

  transition: cubic-bezier(1, 1, 1);
`;

export default CthulhuColor;
