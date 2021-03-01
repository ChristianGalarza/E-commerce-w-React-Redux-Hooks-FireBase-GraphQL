import React, { Component } from 'react'

import FormInput from '../formInput/formInput.component'
import CustomButton from '../customButton/customButton.component'

import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

import './signin.styles.scss'

export default class SignIn extends Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit= async e =>{
        e.preventDefault()
        
        const {email,password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email: '',password: ''})
        } catch (error) {
            console.log(error)
        }

        this.setState({email:'',password:''})
    }

    handleChange= e =>{
        const {value,name}=e.target

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        handleChange={this.handleChange}
                        name='email'
                        label='Email'
                        value={this.state.email}
                        required
                    />
                    <FormInput 
                        type="password"
                        handleChange={this.handleChange}
                        name='password'
                        label='Password'
                        value={this.state.password}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
