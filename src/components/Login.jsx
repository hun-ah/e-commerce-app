import styled from "styled-components"

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 60%;
   margin: 0 auto;

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

const Login = ({ toggleViewLogin, toggleViewSignup }) => {
   return (
      <MainContainer>
         <h4>Welcome back!</h4>
         <SignupDetail>
            <Rectangle side='left'></Rectangle>
            <h5>Login</h5>
            <Rectangle side='right'></Rectangle>
         </SignupDetail>
         <SignupForm>
            <InputText type='text' placeholder="Email Address" />
            <InputText type='text' placeholder="Password" />
            <SignupButton>Login</SignupButton>
         </SignupForm>
         <span>Don't have an account? Register <a onClick={(e) => {
            e.preventDefault()
            toggleViewLogin(false)
            toggleViewSignup(true)
         }} href="">here</a></span>
      </MainContainer>
   )
}

export default Login  
