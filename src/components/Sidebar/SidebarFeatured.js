import React from 'React';
import { graphql, Link, useStaticQuery } from 'gatsby';

// import styled components
import { SidebarItem } from './styled';

const SidebarFeatured = () => {
  const data = useStaticQuery(graphql`
    query GET_FEATURED_STORY_ACF_QUERY {
      wordpressPage(slug: { eq: "featured-story" }) {
        acf {
          author
          title
          year
        }
      }
    }
  `);

  const {
    wordpressPage: {
      acf: { author, title, year },
    },
  } = data;

  return (
    <SidebarItem>
      <h3>Featured Story</h3>
      <Link to="/featured-story">
        <h4>
          <em>
            <strong>{title}</strong>
          </em>
          <br />
          {author}, {year}
        </h4>
      </Link>
    </SidebarItem>
  );
};

export default SidebarFeatured;
