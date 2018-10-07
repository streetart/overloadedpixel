import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../firebase';
import * as routes from '../constants/routes';
import {Button, Col, Input, Layout, Row} from "antd";

const SignInPage = ({history}) =>
    <Layout style={{padding: '20px' }}>
        <h1>SignIn</h1>
        <SignInForm history={history}/>
        <PasswordForgetLink/>
        <SignUpLink/>
    </Layout>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <Layout>
            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col span={12}> <Input
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type="text"
                        placeholder="Email Address"
                    /></Col>
                </Row>
                <br/>
                <Row>
                    <Col span={12}>

                        <Input
                            value={password}
                            onChange={event => this.setState(byPropKey('password', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                    </Col>
                </Row>

                <br/>
                <Row>
                    <Col span={12}>
                        <Button type="primary submit" disabled={isInvalid}>
                            Sign In
                        </Button>
                    </Col>
                </Row>

                {error && <p>{error.message}</p>}
            </form>
            </Layout>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
