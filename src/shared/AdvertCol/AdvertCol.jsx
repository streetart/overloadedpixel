import React, {Component} from 'react';

import {Card} from "antd";
import {AdSpaceComponent} from "./AdvertCol.style";

const {Meta} = Card;

class AdvertCol extends Component {
    render() {
        return (
            <AdSpaceComponent>

                <h3>You should try this</h3>

                <Card
                    hoverable
                    style={{width: 200, marginBottom: 20}}
                    cover={<img alt="example"
                                src="https://cdn.freebiesbug.com/wp-content/themes/freebiesbug/images/wirize-thumb.jpg"/>}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>

                <Card
                    hoverable
                    style={{width: 200, marginBottom: 20}}
                    cover={<img alt="example"
                                src="https://cdn4.buysellads.net/uu/1/4823/1532468675-Squarespace_white.jpeg"/>}
                >
                    <Meta
                        description="www.squarespace.com"
                    />
                </Card>

                <h3>You should try this</h3>

                <Card
                    hoverable
                    style={{width: 200, marginBottom: 20}}
                    cover={<img alt="example"
                                src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=121db2298c113c690bb49153824e54eb&auto=format&fit=crop&w=2734&q=80"/>}
                >
                    <Meta
                        title="Ad space"
                    />
                </Card>


            </AdSpaceComponent>
        );
    }
}

export default AdvertCol;
