import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Rlyeh = () => (
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
      <Img
        fluid={
          data.wordpressAcfAdlConfig.acf.banner_image.localFile.childImageSharp
            .fluid
        }
      />
    )}
  />
);
export default Rlyeh;
