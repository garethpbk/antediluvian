import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

// import styled components
import { Grid } from '../styled';
import { NavItem, NavList, NavWrapper } from './styled';

const Nav = () => {
  const data = useStaticQuery(graphql`
    query ADL_MENU_ITEMS_QUERY {
      allWordpressAdlMenu {
        nodes {
          url
          title
        }
      }
    }
  `);

  const menuItems = data.allWordpressAdlMenu.nodes;

  return (
    <NavWrapper>
      <Grid>
        <NavList>
          {menuItems.map(item => (
            <NavItem key={item.title}>
              <Link to={item.url}>{item.title.toUpperCase()}</Link>
            </NavItem>
          ))}
        </NavList>
      </Grid>
    </NavWrapper>
  );
};

export default Nav;
