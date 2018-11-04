import React, {Component} from 'react';
import { Button, Col, Icon, Input, Row} from "antd";
import {Wapper} from "./Contact.style";
import BreadcrumbComponent from "../../../shared/Breadcrumb/BreadcrumbComponent";

const { TextArea } = Input;
class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <BreadcrumbComponent/>

                <Wapper>

                    <form onSubmit={this.onSubmit}>
                        <Row gutter={22}>
                            <Col span={12}>
                                <h1>Contact me</h1>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="Name" />
                                <br/>
                                <br/>
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} size="large" placeholder="Name" />
                                <br/>
                                <br/>
                                <TextArea placeholder="Message Us" rows={4} />
                                <br/>
                                <br/>

                                <Button type="primary" htmlType="submit" size="large">
                                   Submit
                                </Button>
                            </Col>
                            <Col span={12}>
                            <h3>text</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                            </Col>

                        </Row>
                    </form>
                </Wapper>

            </React.Fragment>
        );
    }
}

export default Contact;
