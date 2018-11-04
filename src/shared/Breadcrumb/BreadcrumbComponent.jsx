import React, {Component} from 'react';

import {Link} from "react-router-dom";
import * as routes from "../../constants/routes";
import { Breadcrumb } from "antd";
import {BreadcrumbContainer} from "./BreadcrumbComponent.styles";

class BreadcrumbComponent extends Component {
    render() {
        return (

            <BreadcrumbContainer>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to={routes.LANDING}>Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>Contact Me</Breadcrumb.Item>
                </Breadcrumb>
            </BreadcrumbContainer>

        );
    }
}

export default BreadcrumbComponent;
