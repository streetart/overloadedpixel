import React from 'react';
import { inject, observer } from 'mobx-react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import {Menu} from "antd";
import styled from 'styled-components';


const NavBarStyle = styled(Menu)`
  display: flex;
  justify-content: flex-end;
  width: auto;
  padding: 0 10px;
  position: relative;
 right: 0;
  
  
`;


const Navigation = ({ sessionStore }) =>
    <React.Fragment>
        { sessionStore.authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </React.Fragment>

const NavigationAuth = () =>
    <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item><Link to={routes.LANDING}>Landing</Link></Menu.Item>
        <Menu.Item><Link to={routes.HOME}>Home</Link></Menu.Item>
        <Menu.Item><Link to={routes.ACCOUNT}>Account</Link></Menu.Item>
        <Menu.Item><SignOutButton /></Menu.Item>
    </Menu>

const NavigationNonAuth = () =>
    <NavBarStyle
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{ lineHeight: '64px' }}
    >

    <Menu.Item><Link to={routes.LANDING}>Landing</Link></Menu.Item>
    <Menu.Item><Link to={routes.SIGN_IN}>Sign In</Link></Menu.Item>
    </NavBarStyle>

export default compose(
    inject('sessionStore'),
    observer
)(Navigation);
