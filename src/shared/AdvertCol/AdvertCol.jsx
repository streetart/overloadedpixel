import React, {Component} from 'react';

import {Card } from "antd";

const { Meta } = Card;

class AdvertCol extends Component {
    render() {
        return (
            <div>

                    <p>You should try this</p>

                                <Card
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={<img alt="example" src="https://cdn.freebiesbug.com/wp-content/themes/freebiesbug/images/wirize-thumb.jpg" />}
                                >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                    />
                                </Card>



            </div>
        );
    }
}

export default AdvertCol;
