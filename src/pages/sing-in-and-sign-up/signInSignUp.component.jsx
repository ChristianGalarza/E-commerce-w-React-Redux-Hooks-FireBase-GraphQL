import React from 'react';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/sign-up/sign-up.component'

import './signInSignUp.component.styles.scss'

const SingInSingUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SingInSingUp;