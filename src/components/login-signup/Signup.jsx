import styled from "styled-components"
import { useState, useEffect } from 'react'

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
         const res = await fetch(`http://localhost:5000/api/register/`, {
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
            <Rectangle side='left'></Rectangle>
            <h5>Sign-up</h5>
            <Rectangle side='right'></Rectangle>
         </SignupDetail>
         <SignupForm>
            <InputText
               type='text'
               name='fName'
               placeholder="First Name"
               onChange={(e) => handleChange(e)}
            />
            <InputText
               type='text'
               name='lName'
               placeholder="Last Name"
               onChange={(e) => handleChange(e)}
            />
            <InputText
               type='text'
               placeholder="Email Address"
               name='email'
               onChange={(e) => handleChange(e)}
            />
            <InputText
               type='password'
               placeholder="Password"
               name='password'
               onChange={(e) => handleChange(e)}
            />
            <Newsletter>
               <InputCheckbox
                  type='checkbox'
                  name="newsletter"
                  onChange={(e) => handleChange(e)}
               />
               <p>Yes, sign me up to the HM&CO newsletter to never miss out on product launches and exclusive promotions.</p>
            </Newsletter>
            <SignupButton onClick={(e) => handleClick(e)}>Sign up</SignupButton>
         </SignupForm>
         <span>Already have an account? Login <Here onClick={() => {
            toggleViewLogin(true)
            toggleViewSignup(false)
         }}>here</Here></span>
      </MainContainer>
   )
}

export default Signup