import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {SignUpLink} from './SignUp';
import {PasswordForgetLink} from './PasswordForget';
import {auth} from '../../../firebase/index';
import * as routes from '../../../constants/routes';
import {Col, Layout, Row, Form } from "antd";
import {BlockContainer,InputField, SubmitButton } from "./AccountLogin.styles";

const SignInPage = ({history}) =>
    <Layout style={{padding: '20px' }}>
        <h1>SignIn</h1>
        <BlockContainer>
        <SignInForm history={history}/>
            <br/>
        <PasswordForgetLink/>
        <SignUpLink/>
        </BlockContainer>
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

        return <Form onSubmit={this.onSubmit}>
            <Row>
                <Col span={12}> <InputField
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                /></Col>
            </Row>
            <br/>
            <Row>
                <Col span={12}>

                    <InputField
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
                    <SubmitButton type="primary submit" disabled={isInvalid} size='large'>
                        Sign In
                    </SubmitButton>
                </Col>
            </Row>

            {error && <p>{error.message}</p>}
        </Form>;
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};
