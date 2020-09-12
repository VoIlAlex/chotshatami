import React, {useState} from 'react'
import {connect} from 'react-redux'
import { compose }  from 'redux'
import { Link, withRouter } from 'react-router-dom'

import {signInStartAsync} from "../../redux/user/userActions";
import FormInput from "../form-input/FormInput";
import TransparentButton from "../transparent-button/TransparentButton";
import {ReactComponent as Logo} from "../../asserts/logo.svg";
import {ReactComponent as Loader} from "../../asserts/loader.svg";

import './sign-in-form.css'

const SignInForm = props => {

    const [userCredentials, setUserCredentials] = useState({
        login: '',
        password: ''
    })

    const changeHandler = e => {
        let {name, value} = e.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    const submitHandler = e => {
        e.preventDefault()
        props.signInStartAsync(userCredentials, () => props.history.push('/all_objects'))
    }
    return (
        <form className={'signin-form'} onSubmit={submitHandler}>
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
                error={props.loginError && props.loginError}
            />
            <div className="signin__options">
                {
                    props.loginLoading ?
                        <div className="signin-from__loader">
                            <Loader/>
                        </div> : (
                            <>
                                <Link to={'/reset_password'}><span>Забыли пароль?</span></Link>
                                <TransparentButton
                                    width={'25%'}
                                    height={'50px'}
                                    type={'submit'}
                                >Войти</TransparentButton>
                            </>
                        )
                }
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    loginLoading: state.user.loginLoading,
    loginError: state.user.loginError
})

const mapDispatchToProps = dispatch => ({
    signInStartAsync: (userCredentials, cb) => dispatch(signInStartAsync(userCredentials, cb))
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SignInForm)