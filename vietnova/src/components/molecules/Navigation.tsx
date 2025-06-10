import React from 'react';
import { Menu } from 'antd';

const Navigation: React.FC = () => (
  <Menu mode='horizontal' className='navigation-menu'>
    <Menu.Item key='home'>Introduction</Menu.Item>
    <Menu.Item key='about'>Home</Menu.Item>
    <Menu.Item key='blog'>Blog</Menu.Item>
    <Menu.Item key='aboutus'>About us</Menu.Item>
  </Menu>
);

export default Navigation;