import React from 'react';
import {Button} from "antd";
import { auth } from '../../../firebase/index';

const SignOutButton = () =>
    <button component={Button} type="primary"
        onClick={auth.doSignOut}>
        Sign Out
    </button>

export default SignOutButton;
