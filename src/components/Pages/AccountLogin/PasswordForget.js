import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {auth} from '../../../firebase/index';
import * as routes from '../../../constants/routes';
import { Col, Layout, Row} from "antd";
import {BlockContainer, InputField, SubmitButton} from "./AccountLogin.styles";


const PasswordForgetPage = ({history}) =>
    <Layout style={{padding: '20px' }}>
        <h1>PasswordForget</h1>
        <BlockContainer>
        <PasswordForgetForm history={history}/>
        </BlockContainer>
    </Layout>

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
        const {
            history,
        } = this.props;

        auth.doPasswordReset(email)
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
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <Row>
                    <Col span={12}>
                        <InputField
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
                <SubmitButton type="primary submit" disabled={isInvalid} size='large'>
                    Reset My Password
                </SubmitButton>
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
