import React, {Component} from 'react';
import {Menu} from "antd";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

import {HeartIcon, PsdIcon, SketchIcon} from '../shared/CustomSvg';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SideMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <Menu  theme='light' mode="inline" defaultSelectedKeys={['0']} style={{ position: 'relative' , marginTop:'80px', borderRight: '1px solid #f0f2f5', backgroundColor: '#FFFFFF', height: 'calc(100vh - 60px)' }}>


                    <SubMenu key="sub1" title={<PsdIcon/>} style={{ borderBottom: '1px solid #f0f2f5'}} >
                        <MenuItemGroup key="g1" title="PSD Freebies" style={{ height: 'auto', lineHeight: '60px', margin: '0', padding: '10px 0', borderBottom: '1px solid #f0f2f5', borderRight: 'none',}}  >
                            <Menu.Item key="1"><Link to={routes.PSD_FREEBIES}>App Designs</Link></Menu.Item>
                            <Menu.Item key="2"><Link to={routes.SIGN_IN}>Icons</Link></Menu.Item>
                            <Menu.Item key="3"><Link to={routes.SIGN_IN}>Mockups</Link></Menu.Item>
                            <Menu.Item key="4"><Link to={routes.SIGN_IN}>UI Kits</Link></Menu.Item>
                            <Menu.Item key="5"><Link to={routes.SIGN_IN}>Miscellaneous</Link></Menu.Item>
                            <Menu.Item key="6"><Link to={routes.SIGN_IN}>Website Templates</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>

                    <SubMenu key="sub2" title={<SketchIcon/>} style={{ borderBottom: '1px solid #f0f2f5'}} >
                        <MenuItemGroup key="g1" title="PSD Freebies" style={{ height: 'auto', lineHeight: '60px', margin: '0', padding: '10px 0', borderBottom: '1px solid #f0f2f5', borderRight: 'none',}}  >
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
                <Menu.Item key="3"  style={{ height: '80px', lineHeight: '80px', margin: '0', padding: '0 1em 0 5px !important', borderBottom: '1px solid #f0f2f5' }}>
                    <Link to={routes.SIGN_IN} style={{ marginLeft: '-10px !important'}} >
                        <SketchIcon />
                    <span>nav 3</span>
                    </Link>
                </Menu.Item>
            </Menu>
            </React.Fragment>
        );
    }
}

export default SideMenu;
