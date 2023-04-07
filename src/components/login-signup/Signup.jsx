import styled from "styled-components"
import { useState } from 'react'

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 60%;
   margin: auto;
   color: #2d2b2b;
   padding: 30px 0;

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

   @media screen and (max-width: 499px){
      & h5 {
         margin: 0 10px;
      }
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

const Newsletter = styled.div`
   display: flex;
   gap: 10px;

   & p {
      font-size: 12px;
      line-height: 18px;
      width: 90%;
   }
`

const InputCheckbox = styled.input`
   height: 16px;
   width: 16px;
   accent-color: #000;
   cursor: pointer;
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

const Signup = ({ toggleViewLogin, toggleViewSignup }) => {
   const [newUser, setNewUser] = useState({
      fName: '',
      lName: '',
      email: '',
      password: '',
      newsletter: false
   })

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setNewUser(prevState => {
         return { ...prevState, [name]: type === 'checkbox' ? checked : value }
      }
      )
   }

   const handleClick = async (e) => {
      e.preventDefault()

      try {
         const res = await fetch(`https://e-commerce-api.cyclic.app/api/register/`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
         })
         const data = await res.json()
         console.log(data)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <MainContainer>
         <h4>New to HM&CO?</h4>
         <SignupDetail>
            <Rectangle></Rectangle>
            <h5>Sign up</h5>
            <Rectangle></Rectangle>
         </SignupDetail>
         <SignupForm>
            <label htmlFor="fName">First name*
               <InputText
                  type='text'
                  name='fName'
                  id='fName'
                  placeholder="Enter first name"
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label htmlFor="lName">Last name*
               <InputText
                  type='text'
                  name='lName'
                  id='lName'
                  placeholder="Enter last name"
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label htmlFor="email">Email*
               <InputText
                  type='text'
                  placeholder="Enter email"
                  name='email'
                  id='email'
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label htmlFor="password">Password*
               <InputText
                  type='password'
                  placeholder="Enter password"
                  name='password'
                  id='password'
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <Newsletter>
               <InputCheckbox
                  type='checkbox'
                  name="newsletter"
                  onChange={(e) => handleChange(e)}
               />
               <p>Yes, sign me up to the HM&CO newsletter to never miss out on product launches and promotions.</p>
            </Newsletter>
            <SignupButton onClick={(e) => handleClick(e)}>Functionality under construction &#128119;</SignupButton>
            <p style={{ fontSize: '10px', marginTop: '-16px' }}>*you can still checkout as a guest</p>
         </SignupForm>
         <span>Already have an account? <Here onClick={() => {
            toggleViewLogin(true)
            toggleViewSignup(false)
         }}>Log in</Here></span>
      </MainContainer>
   )
}

export default Signup