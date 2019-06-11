import styled from 'styled-components';

// import theme helpers
import { getBreakpoint, getColor, getFontWeight } from '../../../util/theme';

// import background image
// import rlyehBg from '../../../images/rlyeh-bg.jpg';

// import BackgroundImage component
import { RlyehBg } from '../../Images';

// const BannerWrapper = styled.section`
//   background-image: url(${rlyehBg});
//   background-size: cover;

//   height: 500px;
// `;

const BannerWrapper = styled(RlyehBg)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.99)
  );
  /**
  * override the opacity: 0.99 hack gatsby-background-image uses for stacking context
  * hack to override a hack lol
  */
  opacity: 1 !important;

  height: 200px;

  padding: 0 0 50px 0;

  @media (min-width: ${getBreakpoint('lg')}) {
    height: 500px;

    padding: 0 0 100px 0;
  }

  h1,
  h2 {
    color: ${getColor('medGreen')};
  }

  h1 {
    font-family: Cinzel, serif;
    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;

    @media (min-width: ${getBreakpoint('lg')}) {
      font-size: 5rem;
      letter-spacing: 1rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: ${getFontWeight('light')};

    @media (min-width: ${getBreakpoint('lg')}) {
      font-size: 3.5rem;
    }
  }
`;

export default BannerWrapper;
