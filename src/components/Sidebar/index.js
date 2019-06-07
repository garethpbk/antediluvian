import React from 'react';

// import components
import SidebarCurrent from './SidebarCurrent';
import SidebarFeatured from './SidebarFeatured';

// import styled components
import { SidebarItemsWrapper, SidebarWrapper } from './styled';

const Sidebar = () => (
  <SidebarWrapper>
    <SidebarItemsWrapper>
      <SidebarFeatured />
      <SidebarCurrent />
    </SidebarItemsWrapper>
  </SidebarWrapper>
);

export default Sidebar;
