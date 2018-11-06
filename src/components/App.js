import React from 'react';

import {BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './Pages/AccountLogin/SignUp';
import SignInPage from './Pages/AccountLogin/SignIn';
import PasswordForgetPage from './Pages/AccountLogin/PasswordForget';
import HomePage from './Home';
import AccountPage from './Pages/AccountLogin/Account';
import FooterView from './footer/FooterView'

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';
import './App.css';

import {Icon, Layout} from 'antd';
import styled, {ThemeProvider} from 'styled-components';
import SideMenu from "./sideNav/SideMenu";
import PsdPage from "./Pages/psdContainer/PsdPage";
import AboutUs from "./Pages/aboutUs/AboutUs";
import AdvertCol from "../shared/AdvertCol/AdvertCol";
import Contact from "./Pages/contactMe/Contact";
import BlogContainer from "./Pages/BlogContainer/BlogContainer";


const {Header, Sider, Content} = Layout;

const SideNav = styled(Sider)`
    @media screen and (max-width: 700px) {
        display: none;
    }
`

const TopNav = styled(Header)`
  width: 100%;
  padding: 0 ;
  position: absolute;
  left: 0;
`;

const theme = {
    primary: '#736EFE',
    light: '#FFFFFFF'
};

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
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Router>
                        <Layout>
                            <Sider trigger={null}
                                   collapsible
                                   width={'250px'}

                                   collapsed={this.state.collapsed}
                                   style={{

                                       minHeight: '100vh ',
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

                                    <Switch>
                                        <Route exact path={routes.LANDING} component={LandingPage}/>
                                        <Route exact path={routes.ABOUT} component={AboutUs}/>
                                        <Route exact path={routes.BLOG} component={BlogContainer}/>
                                        <Route exact path={routes.SIGN_UP} component={SignUpPage}/>
                                        <Route exact path={routes.SIGN_IN} component={SignInPage}/>
                                        <Route exact path={routes.PASSWORD_FORGET} component={PasswordForgetPage}/>
                                        <Route exact path={routes.HOME} component={HomePage}/>
                                        <Route exact path={routes.ACCOUNT} component={AccountPage}/>
                                        <Route exact path={routes.CONTACT} component={Contact}/>

                                        <Route exact path={routes.PSD_FREEBIES} component={PsdPage}/>
                                    </Switch>


                                </Content>
                            </Layout>
                            <SideNav theme="light" width={'250px'}
                                     style={{marginTop: '67px', padding: '1em', borderLeft: '1px solid #f0f2f5',}}>
                                <AdvertCol/>
                            </SideNav>
                        </Layout>

                    </Router>
                </ThemeProvider>
                <FooterView/>
            </React.Fragment>
        );
    }

}

export default withAuthentication(App);

