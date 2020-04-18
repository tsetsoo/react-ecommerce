import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

const SignUp = ({signUpStart}) => {
    const [userData, setUserData] = useState({ displayName: '', email: '', password: '', repeatPassword: '' })
    const { displayName, email, password, repeatPassword } = userData
    const handleSubmit = async event => {
        event.preventDefault()

        if(password !== repeatPassword) {
            alert('passwords do not match')
            return;
        }

        signUpStart(displayName, email, password)
    }
    const handleChange = event => {
        const { name, value } = event.target

        setUserData({...userData, [name]: value})
    }

    return(
        <div className='sign-up'>
            <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} required handleChange={handleChange} label='Display Name'/>
                <FormInput name='email' type='email' value={email} required handleChange={handleChange} label='Email'/>
                <FormInput name='password' type='password' value={password} required handleChange={handleChange} label='Password'/>
                <FormInput name='repeatPassword' type='password' value={repeatPassword} required handleChange={handleChange} label='Confirm Password'/>
                <div className='buttons'>
                    <CustomButton type='submit'>Sign up</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})


export default connect(null, mapDispatchToProps)(SignUp);