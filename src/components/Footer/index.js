import React from 'react';

// import components
import Cthulhu from '../Cthulhu';

// import styled components
import { FooterContainer, FooterWrapper } from './styled';

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <p>© {new Date().getFullYear()} Antediluvian Magazine</p>
      <Cthulhu />
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
