import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {IoChevronForward} from 'react-icons/io5'
import {LoginPageStyles, LoginExtras, LoginForm, LoginBannerSection, LoginFormSection, LoginContainer} from './styles'
import {Brand} from './../../components/branding'
import {SubmitButton} from './../../ui/buttons'
import {Label, Input} from './../../ui/forms'

function LoginPage (props) {
  let navigation = useNavigate()

  function onHandleSubmit(e) {
    e.preventDefault()
    navigation('/dashboard')
  }
  return (
    <>
      <LoginContainer>
        <LoginPageStyles>
          <LoginBannerSection>
            <p>See your world clearly.</p>
          </LoginBannerSection>
          <LoginFormSection>
            <Brand/>
            <p>Welcome back!</p>
            <LoginForm onSubmit={onHandleSubmit}>
              <Label htmlFor="email" fw="600" margin="0 0 5px 0">Email</Label>
              <Input type="text" id="email" placeholder="janedoe@gmail.com" required bbottom="1px solid transparent" />
              <Label htmlFor="password" fw="600" margin="0 0 5px 0">Password</Label>
              <Input type="password" id="password" placeholder="●●●●●●●●" required bbottom="1px solid transparent" />
              <LoginExtras>
                <div>
                  <Input type="checkbox" id="remember" width="auto" margin="0" cursor="pointer"/>
                  <Label htmlFor="remember" padding="0 0 0 5px" cursor="pointer">Remember me</Label>
                </div>
                <Link to="/">Forgot email/password?</Link>
              </LoginExtras>
              <SubmitButton type="submit">Sign in</SubmitButton>
            </LoginForm>
            <Link to="/404">
              <span>
                404 Page Not Found
                <IoChevronForward size="1rem"/>
              </span>
            </Link>
          </LoginFormSection>
        </LoginPageStyles>
      </LoginContainer>
    </>
  )
}

export default LoginPage