import React from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signUpStart } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, repeatPassword } = this.state
        const { signUpStart } = this.props
        if(password !== repeatPassword) {
            alert('passwords do not match')
            return;
        }

        signUpStart(displayName, email, password)
    }
    handleChange = event => {
        const { name, value } = event.target

        this.setState({[name]: value})
    }

    render() {
        const { displayName, email, password, repeatPassword } = this.state
        return(
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={displayName} required handleChange={this.handleChange} label='Display Name'/>
                    <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                    <FormInput name='repeatPassword' type='password' value={repeatPassword} required handleChange={this.handleChange} label='Confirm Password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})


export default connect(null, mapDispatchToProps)(SignUp);