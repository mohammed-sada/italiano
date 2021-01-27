import React from 'react';
import { Link } from 'react-scroll'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu >
        <Link onClick={toggle} to='meals' spy={true} smooth={true}><SidebarLink >وجبات</SidebarLink></Link>
        <Link onClick={toggle} to='pizza' spy={true} smooth={true}><SidebarLink>بيتزا</SidebarLink></Link>
        <SidebarLink style={{ textDecoration: 'none' }} href='https://italiano-order.netlify.app/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>اطلب الان</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
