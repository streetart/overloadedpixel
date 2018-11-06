import React, {Component} from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import {auth, db} from '../../../firebase/index';
import * as routes from '../../../constants/routes';
import {Col, Layout, Row } from "antd";
import {BlockContainer, InputField, SubmitButton} from "./AccountLogin.styles";


const SignUpPage = ({history}) =>
    <Layout style={{padding: '20px'}}>
        <h1>SignUp</h1>
        <BlockContainer>

            <SignUpForm history={history}/>
        </BlockContainer>
    </Layout>;

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;
        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                history.push(routes.HOME);
                db.doCreateUser(authUser.user.uid, username, email)
                    .then(() => {
                        this.setState({...INITIAL_STATE});
                        history.push(routes.HOME);
                    })
                    .catch(error => {
                        this.setState(byPropKey('error', error));
                    });
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (

            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col span={12}>
                        <InputField
                            value={username}
                            onChange={event => this.setState(byPropKey('username', event.target.value))}
                            type="text"
                            placeholder="Full Name"
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={12}>
                        <InputField
                            value={email}
                            onChange={event => this.setState(byPropKey('email', event.target.value))}
                            type="text"
                            placeholder="Email Address"
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={12}>
                        <InputField
                            value={passwordOne}
                            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                            type="password"
                            placeholder="Password"
                        />
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={12}>
                        <InputField
                            value={passwordTwo}
                            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Col>
                </Row>
                <SubmitButton buttodisabled={isInvalid} type="primary submit" size="large">
                    Sign Up
                </SubmitButton>

                {error && <p>{error.message}</p>}
            </form>


        );
    }
}

const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink,
};
