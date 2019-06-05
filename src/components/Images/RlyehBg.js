import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const RlyehBg = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfAdlConfig(
          id: { eq: "21d46874-dd1b-5720-a990-4a53fbcccfa5" }
        ) {
          acf {
            banner_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage
        className={className}
        fluid={
          data.wordpressAcfAdlConfig.acf.banner_image.localFile.childImageSharp
            .fluid
        }
      >
        <h1>Antediluvian</h1>
        <h2>A Journal of the Weird</h2>
      </BackgroundImage>
    )}
  />
);
export default RlyehBg;
