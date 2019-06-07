import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const CurrentIssueCover = () => {
  const data = useStaticQuery(graphql`
    query GET_CURRENT_ISSUE_COVER_QUERY {
      wordpressPage(slug: { eq: "current" }) {
        acf {
          issue_cover {
            localFile {
              childImageSharp {
                fluid(maxWidth: 420) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.wordpressPage.acf.issue_cover.localFile.childImageSharp.fluid}
    />
  );
};

export default CurrentIssueCover;
