import styled from "styled-components"

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
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

const Newsletter = styled.div`
   display: flex;
   gap: 10px;
   padding: 10px 0;

   & p {
      font-size: 12px;
      width: 90%;
   }
`

const InputCheckbox = styled.input`
   height: 20px;
   width: 20px;
   accent-color: #000;
   cursor: pointer;
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

const Signup = ({ toggleViewLogin, toggleViewSignup }) => {
   return (
      <MainContainer>
         <h4>New to HM&CO?</h4>
         <SignupDetail>
            <Rectangle side='left'></Rectangle>
            <h5>Sign-up</h5>
            <Rectangle side='right'></Rectangle>
         </SignupDetail>
         <SignupForm>
            <InputText type='text' placeholder="First Name" />
            <InputText type='text' placeholder="Last Name" />
            <InputText type='text' placeholder="Email Address" />
            <InputText type='text' placeholder="Password" />
            <Newsletter>
               <InputCheckbox type='checkbox' />
               <p>Yes, sign me up to the HM&CO newsletter to never miss out on product launches and exclusive promotions.</p>
            </Newsletter>
            <SignupButton>Sign up</SignupButton>
         </SignupForm>
         <span>Already have an account? Login <Here onClick={() => {
            toggleViewLogin(true)
            toggleViewSignup(false)
         }}>here</Here></span>
      </MainContainer>
   )
}

export default Signup