import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

const Nav = () => (
  <StaticQuery
    query={graphql`
      query ADL_MENU_ITEMS_QUERY {
        allWordpressAdlMenu {
          nodes {
            url
            title
          }
        }
      }
    `}
    render={data => {
      const menuItems = data.allWordpressAdlMenu.nodes;

      return (
        <nav>
          <ul>
            {menuItems.map(item => (
              <li key={item.title}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      );
    }}
  />
);

export default Nav;
