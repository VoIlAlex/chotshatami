import React, {useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom';

import { resetPasswordStartAsync } from "../../redux/user/userActions";

import FormInput from "../form-input/FormInput";
import TransparentButton from "../transparent-button/TransparentButton";
import {ReactComponent as Logo} from "../../asserts/logo.svg";
import {ReactComponent as Loader} from "../../asserts/loader.svg";

import './reset-password-form.css'

const ResetPasswordForm = props => {
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        login: '',
        password: '',
        new_password: ''
    })

    const changeHandler = e => {
        let {name, value} = e.target
        setCredentials({...credentials, [name]: value})
    }

    const submitHandler = e => {
        e.preventDefault()
        props.resetPasswordStartAsync(credentials, () => history.push('/login'))
    }
    return (
        <form className={'reset-password-form'} onSubmit={submitHandler}>
            <Logo style={{marginTop: '30px'}}/>
            <FormInput
                name={'login'}
                width={'90%'}
                labelValue={'Логин'}
                margin={'30px 0 0 0'}
                onChange={changeHandler}
            />
            <FormInput
                name={'password'}
                width={'90%'}
                labelValue={'Пароль'}
                margin={'20px 0 0 0'}
                onChange={changeHandler}
                type={'password'}
            />
            <FormInput
                name={'new_password'}
                width={'90%'}
                labelValue={'Новый пароль'}
                margin={'20px 0 0 0'}
                onChange={changeHandler}
                type={'password'}
                error={props.resetPasswordError && props.resetPasswordError}
            />
            <div className="reset-password__options">
                {
                    props.resetPasswordLoading ?
                        <div className="reset-password__loader">
                            <Loader/>
                        </div> : (
                            <TransparentButton
                                width={'40%'}
                                height={'50px'}
                                type={'submit'}
                            >Сменить пароль</TransparentButton>
                        )
                }
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    resetPasswordLoading: state.user.resetPasswordLoading,
    resetPasswordError: state.user.resetPasswordError
})

const mapDispatchToProps = dispatch => ({
    resetPasswordStartAsync: (credentials, cb) => dispatch(resetPasswordStartAsync(credentials, cb))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm)