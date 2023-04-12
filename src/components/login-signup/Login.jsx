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
   color: #2d2b2b;
   padding: 90px 0;
   margin: auto;

   & h4 {
      font-size: 24px;
      line-height: 36px;
   }

   @media screen and (max-width: 600px){
      width: 70%;
   }
`

const SignupDetail = styled.div`
   font-size: 12px;
   align-items: center;
   justify-content: center;
   margin-top: 30px;
   display: flex;
   width: 100%;
   font-size: 12px;
   line-height: 18px;

   & h5 {
      width: 20%;
      text-align: center;
   }
`

const Rectangle = styled.div`
   width: 40%;
   background: #B9B9B9;
   height: 1px;
`

const SignupForm = styled.form`
   display: flex;
   flex-direction: column;
   padding: 20px 0;
   gap: 24px;
   width: 100%;

    & label {
      font-size: 12px;
      line-height: 18px;
      display: flex;
      flex-direction: column;
      gap: 8px;
   }
`

const InputText = styled.input`
   font-family: 'Poppins', sans-serif;
   padding: 16px;
   background: #F9F9F9;
   border: none;
   
   &::placeholder {
    color: #B9B9B9;
    font-size: 16px;
    line-height: 24px;
   }
`

const SignupButton = styled.button`
   background: rgb(45, 43, 43, 0.3);
   color: #FFF;
   border: none;
   padding: 16px 32px;
   font-size: 16px;
   /* cursor: pointer; */
`

const Here = styled.span`
   cursor: pointer;
   text-decoration: underline;
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
            <Rectangle></Rectangle>
            <h5>Login</h5>
            <Rectangle></Rectangle>
         </SignupDetail>
         <SignupForm>
            <label htmlFor="email">Email*
               <InputText
                  type='text'
                  placeholder="Email Address"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
               />
            </label>
            <label htmlFor="email">Email*
               <InputText
                  type='text'
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
               />
            </label>
            <SignupButton onClick={handleLogin}>Functionality under construction &#128119;</SignupButton>
            <p style={{ fontSize: '10px', marginTop: '-10px' }}>*you can still checkout as a guest</p>
         </SignupForm>
         <span>Don't have an account? <Here onClick={() => {
            toggleViewLogin(false)
            toggleViewSignup(true)
         }}>Sign up</Here></span>
      </MainContainer>
   )
}

export default Login  
