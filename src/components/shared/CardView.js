import React, {Component} from 'react';
import {Avatar, Card, Icon} from "antd";

const { Meta } = Card;

class CardView extends Component {
    render() {
        return (
            <React.Fragment>
                <Card
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </React.Fragment>
        );
    }
}

export default CardView;
