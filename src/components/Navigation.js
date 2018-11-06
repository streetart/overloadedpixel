import React from 'react';
import {inject, observer} from 'mobx-react';
import {compose} from 'recompose';
import {Link} from 'react-router-dom';


import SignOutButton from './Pages/AccountLogin/SignOut';
import * as routes from '../constants/routes';
import {Menu, Input} from "antd";
import styled from 'styled-components';


const Search = Input.Search;

const NavBarStyle = styled(Menu)`
  display: flex;
  justify-content: flex-end;
  width: auto;
  padding: 0 10px;
  position: relative;
 right: 0;
  
  
`;


const Navigation = ({sessionStore}) =>
    <React.Fragment>
        {sessionStore.authUser
            ? <NavigationAuth/>
            : <NavigationNonAuth/>
        }
    </React.Fragment>

const NavigationAuth = () =>
    <NavBarStyle
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{lineHeight: '64px'}}
    >

        <Menu.Item><Link to={routes.HOME}>Home</Link></Menu.Item>
        <Menu.Item><Link to={routes.LANDING}>Landing Page</Link></Menu.Item>
        <Menu.Item><Link to={routes.ABOUT}>About US</Link></Menu.Item>
        <Menu.Item><Link to={routes.BLOG}>Listen Up</Link></Menu.Item>
        <Menu.Item><Link to={routes.CONTACT}>Contact Me</Link></Menu.Item>
        <Menu.Item><SignOutButton/></Menu.Item>
    </NavBarStyle>

const NavigationNonAuth = () =>
    <NavBarStyle
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['0']}
        style={{lineHeight: '64px'}}
    >

        <Menu.Item><Link to={routes.LANDING}>Home</Link></Menu.Item>
        <Menu.Item><Link to={routes.ABOUT}>About Us</Link></Menu.Item>
        <Menu.Item><Link to={routes.BLOG}>Listen Up</Link></Menu.Item>
        <Menu.Item><Link to={routes.SIGN_IN}>Sign In</Link></Menu.Item>
        <Menu.Item><Link to={routes.CONTACT}>Contact Me</Link></Menu.Item>
        <Menu.Item><Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{width: '200px', marginTop: '15px'}}
        /></Menu.Item>
    </NavBarStyle>;

export default compose(
    inject('sessionStore'),
    observer
)(Navigation);
