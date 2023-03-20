import styled from 'styled-components'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import navText from '../data/navText'
import LoginSignupBackground from './login-signup/LoginSignupBackground'

const NavContainer = styled.div`
   width: 100%;
   height: 70px;
   background: #FFF;
   display: flex;
   position: fixed;
   align-items: center;
   justify-content: center;
   z-index: 10;
`

const Nav = styled.nav`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   display: flex;
   align-items: center;
   padding: 0 20px;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const Left = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`

const Right = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
`

const NavList = styled.ul`
   width: 100%;
   display: flex;
   justify-content: space-between;
`

const NavListItem = styled.li`
   cursor: pointer;
`

const SearchBarContainer = styled.div`
   border: 1px solid #dbdbdb;
   display: flex;
   align-items: center;
   padding: 2px;
`

const Input = styled.input`
   font-family: 'Poppins', sans-serif;
   border: none;
   padding: 4px;
   text-indent: 2px;

   &:focus {
   outline: none;
   }
`

const NotificationBadge = styled.div`
   height: 18px;
   width: 18px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 12px;
   border-radius: 50%;
   background: #5980f5;
   position: absolute;
   top: -4px;
   left: 12px;
`

const Navbar = () => {
   const [viewSignup, setViewSignup] = useState(false)
   const [viewLogin, setViewLogin] = useState(false)
   const [viewModal, setViewModal] = useState(false)

   const toggleViewSignup = (bool) => {
      setViewSignup(bool)
   }

   const toggleViewLogin = (bool) => {
      setViewLogin(bool)
   }

   const toggleViewModal = (bool) => {
      setViewModal(bool)
   }

   return (
      <>
         <NavContainer>
            <Nav>
               <NavList>
                  <Left>
                     <NavListItem
                        style={{ fontWeight: '700' }}>
                        {navText.companyName.toUpperCase()}
                     </NavListItem>
                     <NavListItem>{navText.title1}</NavListItem>
                     <NavListItem>{navText.title3}</NavListItem>
                  </Left>
                  <Right>
                     <NavListItem>
                        <SearchBarContainer>
                           <Input />
                           <AiOutlineSearch style={{ marginRight: '4px' }} />
                        </SearchBarContainer>
                     </NavListItem>
                     <NavListItem onClick={() => {
                        toggleViewSignup(true)
                        toggleViewModal(true)
                     }}>{navText.register}</NavListItem>
                     <NavListItem onClick={() => {
                        toggleViewLogin(true)
                        toggleViewModal(true)
                     }}>{navText.login}</NavListItem>
                     <NavListItem style={{ position: 'relative' }}>
                        <BiShoppingBag style={{ width: '20px', height: '20px' }} />
                        <NotificationBadge>5</NotificationBadge>
                     </NavListItem>
                  </Right>
               </NavList>
            </Nav>
         </NavContainer>
         <LoginSignupBackground
            viewModal={viewModal}
            toggleViewModal={toggleViewModal}
            viewSignup={viewSignup}
            viewLogin={viewLogin}
            toggleViewSignup={toggleViewSignup}
            toggleViewLogin={toggleViewLogin}
         />
      </>
   )
}

export default Navbar
