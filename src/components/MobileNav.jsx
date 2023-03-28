import styled from "styled-components"
import navText from '../data/navText'
import Burger from "./Burger"
import { useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'

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
   gap: 24px;
`

const Right = styled.div`
   display: flex;
   align-items: center;
   gap: 24px;
`

const NavList = styled.ul`
   width: 100%;
   display: flex;
   justify-content: space-between; 
   transition: all .6s ease-in-out;
`

const NavListItem = styled.li`
   cursor: pointer;
   color: #2D2B2B;
   list-style: none;

    &:hover{
      text-decoration: underline;
   }
`

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #2D2B2B;
`

const SearchBarContainer = styled.div`
   border-radius: 30px;
   width: 40px;
   height: 40px;
   background: #F9F9F9;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Input = styled.input`
   font-family: 'Poppins', sans-serif;
   position: fixed;
   border: none;
   background: #e7e7e7;
   width: 100%;
   height: 50px;
   color: #2D2B2B;
   text-indent: 20px;
   top: 70px;
   z-index: 10;
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
   font-size: 10px;
   border-radius: 50%;
   background: #5980f5;
   color: #F9F9F9;
   position: absolute;
   top: -4px;
   left: 12px;
`

const MobileMenu = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   height:100%;
   width: 100%;
   background: #F9F9F9;
   z-index: 1;
   transform: translateX(${({ open }) => open ? '0%' : '100%'});
   transition: 0.3s;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 24px;
   font-family: 'Poppins', sans-serif;
   font-size: 24px;
   line-height: 36px;
   color: #2D2B2B;
`

const SignupLogin = styled.div`
   display: flex;
   gap: 24px;
   font-size: 16px;
   line-height: 24px;
`

const MobileNav = ({ setFilters, toggleViewModal, toggleViewSignup, toggleViewLogin, quantity }) => {
   const [showSearchBar, setShowSearchBar] = useState(false)
   const [openBurger, setOpenBurger] = useState(false)
   const location = useLocation().pathname

   document.body.style.overflow = openBurger ? "hidden" : "visible"

   // for now for if user is logged in
   const user = false

   const handleSearchBar = () => {
      setShowSearchBar(prevState => !prevState)
   }

   const handleMobileLinks = () => {
      setOpenBurger(false)
      return location.includes('/') ? setFilters({}) : ''
   }

   const handleRegisterLogin = () => {
      setOpenBurger(false)
      toggleViewModal(true)
   }

   return (
      <>
         <NavContainer>
            <Nav>
               <NavList>
                  <Left>
                     <StyledLink to="/">
                        <NavListItem
                           style={{ fontWeight: '700', textDecoration: 'none' }}>
                           {navText.companyName.toUpperCase()}
                        </NavListItem>
                     </StyledLink>
                  </Left>
                  <Right>
                     <NavListItem style={{ textDecoration: 'none' }}>
                        <SearchBarContainer onClick={handleSearchBar}>
                           <AiOutlineSearch
                              style={{ width: '20px', height: '20px' }} />
                        </SearchBarContainer>
                     </NavListItem>
                     <NavListItem style={{ position: 'relative' }}>
                        <StyledLink to="/shoppingBag">
                           <BiShoppingBag style={{ width: '24px', height: '24px' }} />
                           {quantity >= 1 && <NotificationBadge>{quantity}</NotificationBadge>}
                        </StyledLink>
                     </NavListItem>
                     <NavListItem>
                        <Burger
                           open={openBurger}
                           setOpenBurger={setOpenBurger}
                        >
                        </Burger>
                     </NavListItem>
                  </Right>
               </NavList>
            </Nav>
         </NavContainer>
         {showSearchBar ? <Input
            placeholder="Search"
         /> : null}
         <MobileMenu open={openBurger}>
            <StyledLink to='/productList/all' onClick={handleMobileLinks}>
               <NavListItem>Clothing</NavListItem>
            </StyledLink>
            <StyledLink to='/ourStory' onClick={handleMobileLinks}>
               <NavListItem>Our Story</NavListItem>
            </StyledLink>
            {!user ?
               <SignupLogin>
                  <NavListItem onClick={() => {
                     handleRegisterLogin()
                     toggleViewSignup(true)
                  }}>Register</NavListItem>
                  <NavListItem onClick={() => {
                     handleRegisterLogin()
                     toggleViewLogin(true)
                  }}>Log in</NavListItem>
               </SignupLogin>
               : null
            }
         </MobileMenu>
      </>
   )
}

export default MobileNav
