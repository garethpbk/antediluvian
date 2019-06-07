import styled from 'styled-components/macro';

// import sprite
import cthulhuGreySprite from '../../../images/cthulhu-grey-sprite.png';

const CthulhuGrey = styled.div`
  position: absolute;
  z-index: 99;

  height: 32px;
  width: 32px;

  background-image: url(${cthulhuGreySprite});
`;

export default CthulhuGrey;
