import React from 'react';
import {List, Avatar, Button, Skeleton, Icon, Layout, Row, Col, Affix, Divider} from 'antd';

import reqwest from 'reqwest';
import {BlockContainer} from "../AccountLogin/AccountLogin.styles";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;


const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);
class BlogContainer extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({loading: true, name: {}}))),
        });
        this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
                data,
                list: data,
                loading: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    };

    render() {
        const {initLoading, loading, list } = this.state;
        const loadMore = !initLoading && !loading ? (
            <div style={{textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px'}}>
                <Button onClick={this.onLoadMore}>loading more</Button>
            </div>
        ) : null;

        return (
            <Layout style={{padding: '20px'}}>
                <Row gutter={16}>
                    <Col span={15} >
                        <BlockContainer>
                            <List
                                className="demo-loadmore-list"
                                loading={initLoading}
                                itemLayout="vertical"
                                loadMore={loadMore}
                                dataSource={list}
                                renderItem={item => (
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item  actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]} extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>

                                            <List.Item.Meta
                                                avatar={<Avatar
                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}

                                                title={<a href="https://ant.design">{item.name.last}</a>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />


                                        </List.Item>
                                    </Skeleton>
                                )}
                            />
                        </BlockContainer>
                    </Col>
                    <Col span={8} push={1}>
                        <Affix offsetTop={20} onChange={affixed => console.log(affixed)}>
                        <h3>Popular Articles</h3>
                            <Divider />
                        </Affix>
                    </Col>
                </Row>

            </Layout>
        );
    }
}

export default BlogContainer;