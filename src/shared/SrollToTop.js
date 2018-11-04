import React, {Component} from 'react';
import {BackTop} from "antd";

import './Sharedstyles.css';

class ScrollToTop extends Component {
    render() {
        return (
            <React.Fragment>
                <BackTop>
                    <div className="ant-back-top-inner">UP</div>
                </BackTop>
                Scroll down to see the bottom-right
                <strong style={{ color: '#1088e9' }}> blue </strong>
                button.
            </React.Fragment>
        );
    }
}

export default ScrollToTop;
