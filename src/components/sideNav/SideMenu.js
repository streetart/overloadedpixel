import React, {Component} from 'react';
import {Icon, Menu} from "antd";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import {HeartIcon, PandaIcon } from '../shared/CustomSvg';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SideMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu  theme='light' mode="inline" defaultSelectedKeys={['0']} style={{ position: 'relative' , paddingTop:'65px', backgroundColor: '#FFFFFF', height: 'calc(100vh - 60px)',  boxShadow: 'inset 1px 0px 0px 0px #E8E8E8'}}>


                    <SubMenu key="sub1" title={<PandaIcon/>}>
                        <MenuItemGroup key="g1" title="PSD Freebies" style={{ height: 'auto', lineHeight: '60px', margin: '0', padding: '0', borderBottom: '1px solid #f0f2f5', borderRight: 'none',}}  >
                            <Menu.Item key="1"><Link to={routes.PSD_FREEBIES}>App Designs</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={routes.SIGN_IN}>Icons</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={routes.SIGN_IN}>Mockups</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={routes.SIGN_IN}>UI Kits</Link></Menu.Item>
                            <Menu.Item key="5"><Link to={routes.SIGN_IN}>Miscellaneous</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={routes.SIGN_IN}>Website Templates</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>


                <Menu.Item key="2"  style={{ height: '80px',lineHeight: '80px', margin: '0', padding: '0 5px 0', borderBottom: '1px solid #f0f2f5' }}>
                    <Link to={routes.SIGN_IN}>
                        <HeartIcon style={{ color: 'hotpink' }} />

                    <span>nav 2</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3"  style={{ height: '80px', width: '250px', lineHeight: '80px', margin: '0', padding: '0 1em 0 5px !important', borderBottom: '1px solid #f0f2f5' }}>
                    <Link to={routes.SIGN_IN} style={{ marginLeft: '-10px !important'}} >
                        <PandaIcon />
                    <span>nav 3</span>
                    </Link>
                </Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }
}

export default SideMenu;
