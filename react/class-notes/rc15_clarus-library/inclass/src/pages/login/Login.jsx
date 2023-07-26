import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from './Login.style'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {setUser}= useAuthContext()
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preaventDefault()
    setUser(true)
    navigate(-1)

  }
  return (
    <LoginContainer>
      <FormContainer>
        <Header>Login Here</Header>
        <StyledForm>
          <StyledInput type='text' placeholder='Username' required/>
          <StyledInput type='password' placeholder='password' required/>
          <StyledButton>Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login