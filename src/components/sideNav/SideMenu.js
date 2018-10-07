import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';




class SideMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu  theme='light' mode="inline" defaultSelectedKeys={['0']} style={{ position: 'relative', top: '60px' , backgroundColor: '#FFFFFF', height: 'calc(100vh - 60px)',  boxShadow: 'inset 1px 0px 0px 0px #E8E8E8'}}>

                <Menu.Item key="1" style={{ height: '80px', width: '250px', lineHeight: '80px', margin: '0', padding: '0', borderBottom: '1px solid #f0f2f5', borderRight: 'none',}}>
                        <Link to={routes.SIGN_IN}>
                        <Icon type="user" />
                            <span>nav 1</span>
                        </Link>
                    </Menu.Item>

                <Menu.Item key="2"  style={{ height: '80px', width: '250px', lineHeight: '80px', margin: '0', padding: '0 5px', borderBottom: '1px solid #f0f2f5' }}>
                    <Link to={routes.SIGN_IN}>
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3"  style={{ height: '80px', width: '250px', lineHeight: '80px', margin: '0', padding: '0', borderBottom: '1px solid #f0f2f5' }}>
                    <Link to={routes.SIGN_IN}>
                    <Icon type="upload" />
                    <span>nav 3</span>
                    </Link>
                </Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }
}

export default SideMenu;
