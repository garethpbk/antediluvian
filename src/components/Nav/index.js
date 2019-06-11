import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

// import styled components
import { Grid } from '../styled';
import {
  NavItem,
  NavList,
  NavMobileIcon,
  NavToggle,
  NavWrapper,
} from './styled';

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

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <NavToggle expanded={expanded} onClick={() => setExpanded(!expanded)}>
        <NavMobileIcon expanded={expanded}>
          <span />
          <span />
          <span />
        </NavMobileIcon>
      </NavToggle>
      <NavWrapper expanded={expanded}>
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
    </>
  );
};

export default Nav;
