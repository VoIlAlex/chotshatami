import React from 'react'

import FormInput from "../form-input/FormInput";
import TransparentButton from "../transparent-button/TransparentButton";
import {ReactComponent as Logo} from "../../asserts/logo.svg";

import './sign-in-form.css'

const SignInForm = () => {
    return (
        <form className={'signin-form'}>
            <Logo style={{marginTop:'30px'}}/>
            <FormInput
                width={'90%'}
                labelValue={'Логин'}
                margin={'30px 0 0 0'}
            />
            <FormInput
                width={'90%'}
                labelValue={'Пароль'}
                margin={'20px 0 0 0'}
            />
            <div className="signin__options">
                <span>Забыли пароль?</span>
                <TransparentButton
                    width={'25%'}
                    height={'50px'}
                >Войти</TransparentButton>
            </div>
        </form>
    )
}

export default SignInForm