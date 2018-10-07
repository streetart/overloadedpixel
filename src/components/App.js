import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import 'antd/dist/antd.css';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import FooterView from './footer/FooterView'

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import './App.css';

import {Icon, Layout} from 'antd';
import styled, {ThemeProvider} from 'styled-components';
import SideMenu from "./sideNav/SideMenu";

const {Header, Sider, Content} = Layout;

const TopNav = styled(Header)`
  width: 100%;
  padding: 0 ;
  position: absolute;
  left: 0;
  p
`;
const theme = {
    primary: '#736EFE',
    light: '#FFFFFFF'
}

const MenuBurger = styled(Icon)`
  position:relative;
  top: 25px;
  width: 200px;
  display: flex;
  height: 0;
  line-height: 60px;
  left: 30px;
  right: 0;
  color: #2b8ed5;
  z-index: 9999;
  align-content: center;
`;

class App extends React.Component {
    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }


    render() {
        return (

            <ThemeProvider theme={theme}>
                <Router>
                    <Layout>
                        <Sider trigger={null}
                               collapsible
                               width={'280px'}
                               collapsed={this.state.collapsed}
                               style={{minHeight: '100vh ', height: 'auto', paddingTop: '60px', backgroundColor: '#FFFFFF'}}>
                            <SideMenu style={{position: 'fixed'}}/>
                        </Sider>
                        <Layout>

                            <TopNav>
                                <MenuBurger
                                    type={this.state.collapsed ? 'arrow-right' : 'arrow-left'}
                                    onClick={this.toggle}
                                /><Navigation/>
                            </TopNav>
                            <Content style={{marginTop: '66px'}}>
                                <Route exact path={routes.LANDING} component={LandingPage}/>
                                <Route exact path={routes.SIGN_UP} component={SignUpPage}/>
                                <Route exact path={routes.SIGN_IN} component={SignInPage}/>
                                <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage}/>
                                <Route exact path={routes.HOME} component={HomePage}/>
                                <Route exact path={routes.ACCOUNT} component={AccountPage}/>
                            </Content>
                            <FooterView/>
                        </Layout>
                    </Layout>
                </Router>
            </ThemeProvider>);
    }

}

export default withAuthentication(App);

