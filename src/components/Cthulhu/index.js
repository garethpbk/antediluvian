import React from 'react';
import { CthulhuColor, CthulhuGrey, CthulhuWrapper } from './styled';

const Cthulhu = () => (
  <CthulhuWrapper>
    <CthulhuGrey className="grey" />
    <CthulhuColor className="color" />
  </CthulhuWrapper>
);

export default Cthulhu;
