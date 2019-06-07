import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

// import styled components
import { Grid } from '../styled';
import { NavItem, NavList, NavWrapper } from './styled';

const Nav = ({ activePage }) => {
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
          {menuItems.map(item => {
            return (
              <NavItem
                key={item.title}
                active={item.title === activePage ? true : false}
              >
                <Link to={item.url}>{item.title.toUpperCase()}</Link>
              </NavItem>
            );
          })}
        </NavList>
      </Grid>
    </NavWrapper>
  );
};

export default Nav;
