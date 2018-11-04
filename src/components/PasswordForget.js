import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../firebase';
import * as routes from '../constants/routes';
import {Button, Col, Input, Row} from "antd";

const PasswordForgetPage = () =>
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm/>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    onSubmit = (event) => {
        const {email} = this.state;

        auth.doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col span={12}>
                        <Input
                            value={this.state.email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </Col>
                </Row>
                <br/>
               <Row>
                <Col span={12}>
                <Button type="primary submit" disabled={isInvalid}>
                    Reset My Password
                </Button>
                </Col>
               </Row>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const PasswordForgetLink = () =>
    <p>
        <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>

export default PasswordForgetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};
