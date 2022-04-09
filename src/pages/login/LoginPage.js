import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiMessageSquareError, BiMessageCheck } from 'react-icons/bi'

import { auth } from 'libs/firebase'
import { Brand } from 'components/branding'
import { SubmitButton } from 'ui/buttons'
import { Label, Input } from 'ui/forms'
import { LoginPageStyles, LoginExtras, LoginForm, LoginBannerSection, LoginFormSection, LoginContainer } from './styles'

function LoginPage(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const notify = (error) => toast.error('Invalid login! Try again.',{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: <BiMessageSquareError/>
  })

  const notifySuccess = (success) => toast.success('Welcome!',{
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    icon: <BiMessageCheck />
  })

  function onLoginRequest(e) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(res=>{
      notifySuccess("done")
      navigate("dashboard")
    })
    .catch(error=>{
      notify(error)
    })
  }

  const [isUser, setIsUser] = useState(false)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUser(true)
      navigate('/dashboard')
    } else {
      setIsUser(false)
    }
  })

  if (isUser) {
    return null
  } else {
    return (
      <>
        <LoginContainer>
          <LoginPageStyles>
            <ToastContainer />
            <LoginBannerSection>
              <p>See your world clearly.</p>
            </LoginBannerSection>
            <LoginFormSection>
              <Brand />
              <p>Welcome back!</p>
              <LoginForm onSubmit={onLoginRequest}>
                <Label htmlFor="email" fw="600" margin="0 0 5px 0">Email</Label>
                <Input type="text" id="email" placeholder="janedoe@gmail.com" bbottom="1px solid transparent" onChange={(e)=>setEmail(e.target.value)} />
  
                <Label htmlFor="password" fw="600" margin="0 0 5px 0">Password</Label>
                <Input type="password" id="password" placeholder="●●●●●●●●" bbottom="1px solid transparent" onChange={(e)=>setPassword(e.target.value)} />
  
                <LoginExtras>
                  <div>
                    <Input type="checkbox" id="remember" width="auto" margin="0" cursor="pointer" />
                    <Label htmlFor="remember" padding="0 0 0 5px" cursor="pointer">Remember me</Label>
                  </div>
                  <Link to="/">Forgot email/password?</Link>
                </LoginExtras>
  
                <SubmitButton type="submit">Sign in</SubmitButton>
              </LoginForm>
            </LoginFormSection>
          </LoginPageStyles>
        </LoginContainer>
      </>
    )
  }
}

export default LoginPage