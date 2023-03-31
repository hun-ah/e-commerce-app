import styled from "styled-components"
import { useState } from 'react'
import { login } from "../../redux/apiCalls"
import { useDispatch } from 'react-redux'

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 60%;
   margin: auto;

   & h4 {
      font-size: 30px;
   }
`

const SignupDetail = styled.div`
   font-size: 12px;
   align-items: center;
   justify-content: center;
   margin-top: 40px;
   display: flex;
   width: 100%;
`

const Rectangle = styled.div`
   width: 40%;
   background: #000;
   height: 1px;
   margin-right: ${({ side }) => side === 'left' && 10}px;
   margin-left: ${({ side }) => side === 'right' && 10}px;
`

const SignupForm = styled.form`
   display: flex;
   flex-direction: column;
   padding: 40px 0;
   gap: 20px;
   width: 100%;
`

const InputText = styled.input`
   text-indent: 4px;
   padding: 10px;
   border: 1px solid #c8c8c8;
`

const SignupButton = styled.button`
   background: #000;
   color: #FFF;
   border: none;
   padding: 20px;
   font-size: 16px;
   cursor: pointer;
`

const Here = styled.span`
   cursor: pointer;
   color: blue;
`

const Login = ({ toggleViewLogin, toggleViewSignup }) => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const dispatch = useDispatch()

   const handleLogin = (e) => {
      e.preventDefault()
      login(dispatch, { email: email, password: password })
   }

   return (
      <MainContainer>
         <h4>Welcome back!</h4>
         <SignupDetail>
            <Rectangle side='left'></Rectangle>
            <h5>Login</h5>
            <Rectangle side='right'></Rectangle>
         </SignupDetail>
         <SignupForm>
            <InputText type='text' placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
            <InputText type='text' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <SignupButton onClick={handleLogin}>Login</SignupButton>
         </SignupForm>
         <span>Don't have an account? Register <Here onClick={() => {
            toggleViewLogin(false)
            toggleViewSignup(true)
         }}>here</Here></span>
      </MainContainer>
   )
}

export default Login  
