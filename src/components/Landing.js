import React, {Component} from 'react';
import TextAnimation from "../shared/TextAnimation";
import {ButtonBlock} from "../shared/Button";
import {Button, List} from "antd";
import CardView from "./shared/CardView";

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
]


class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="containerBlock">
                    <TextAnimation/>
                </section>

                <section style={{padding: '2em'}}>
                    <h2>Latest Free Design Resources</h2>
                    <p>Hand-picked resources for web designer and developers, constantly updated.</p>
                    <List
                        grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3}}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <CardView title={item.title}/>
                            </List.Item>
                        )}
                    />,

                </section>
                <section>
                    <ButtonBlock>
                        <button className="btn btn-green btn-border-o">Button Components</button>
                    </ButtonBlock>{' '}<Button type="primary">Primary</Button>

                </section>
            </React.Fragment>
        );
    }
}

export default Landing;


