import React from 'react';

import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.scss'

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if (password !== confirmPassword) {
      alert('Passwords don\'t match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '' 
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name] : value})
  }


  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput name="displayName" label="Display Name" type="text" value={displayName} handleChange={this.handleChange} required/>
          <FormInput name="email" label="email" type="email" value={email} handleChange={this.handleChange} required/>
          <FormInput name="password" label="password" type="password" value={password} handleChange={this.handleChange} required/>
          <FormInput name="confirmPassword" label="confirm password" type="password" value={confirmPassword} handleChange={this.handleChange} required/>
          <CustomButton type="submit"> Sign Up </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;