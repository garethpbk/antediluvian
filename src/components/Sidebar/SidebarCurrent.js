import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

// import styled components
import { SidebarItem } from './styled';

// import image components
import { CurrentIssueCover } from '../Images';

const SidebarFeatured = () => {
  const data = useStaticQuery(graphql`
    query GET_CURRENT_ISSUE_ACF_QUERY {
      wordpressPage(slug: { eq: "current" }) {
        acf {
          issue_date
          issue_number
        }
      }
    }
  `);

  const {
    wordpressPage: {
      acf: { issue_date, issue_number },
    },
  } = data;

  return (
    <SidebarItem>
      <h3>Current Issue</h3>
      <Link to="/current">
        <CurrentIssueCover />
        <br />
        <h4>
          <em>
            <strong>Issue {issue_number}</strong>
          </em>
          <br />
          {issue_date}
        </h4>
      </Link>
    </SidebarItem>
  );
};

export default SidebarFeatured;
