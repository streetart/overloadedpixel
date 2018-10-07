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
import PsdPage from "./Pages/psdContainer/PsdPage";

const {Header, Sider, Content} = Layout;

const TopNav = styled(Header)`
  width: 100%;
  padding: 0 ;
  position: absolute;
  left: 0;
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
                               width={'250px'}
                               collapsed={this.state.collapsed}
                               style={{minHeight: '100vh ',
                                   height: 'auto',
                                   backgroundColor: '#FFFFFF',
                                   boxShadow: '1px 0px 0px 0px #E8E8E8'
                               }}>
                            <SideMenu/>
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

                                <Route exact path={routes.PSD_FREEBIES} component={PsdPage}/>

                            </Content>
                                <FooterView/>



                        </Layout>
                        <Sider theme="light" width={'300px'} style={{marginTop: '67px', padding: '1em'}}>Sider</Sider>
                    </Layout>
                </Router>
            </ThemeProvider>
        );
    }

}

export default withAuthentication(App);

