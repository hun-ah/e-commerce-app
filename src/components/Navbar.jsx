import styled from 'styled-components'
import MobileNav from './MobileNav'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import navText from '../data/navText'
import LoginSignupBackground from './login-signup/LoginSignupBackground'
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react'

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
   background: #F9F9F9;
   display: flex;
   align-items: center;
`

const Input = styled.input`
   font-family: 'Poppins', sans-serif;
   background: #F9F9F9;
   border-radius: 30px;
   border: none;
   padding: 8px 14px;
   padding-left: 10px;
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
   position: absolute;
   top: -4px;
   left: 12px;
`

const Navbar = ({ setFilters }) => {
   const [viewSignup, setViewSignup] = useState(false)
   const [viewLogin, setViewLogin] = useState(false)
   const [viewModal, setViewModal] = useState(false)
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const location = useLocation().pathname

   const toggleViewSignup = (bool) => {
      setViewSignup(bool)
   }

   const toggleViewLogin = (bool) => {
      setViewLogin(bool)
   }

   const toggleViewModal = (bool) => {
      setViewModal(bool)
   }

   // scroll to top of screen on render
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   // when to display mobile nav
   useEffect(() => {
      window.addEventListener("resize", function () {
         setWindowWidth(window.innerWidth)
      })
   }, [windowWidth])

   // for now for if user is logged in
   const user = false

   document.body.style.overflow = viewModal ? "hidden" : "visible"

   return (
      <>
         {windowWidth > 800 ?
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
                           <StyledLink to="/productList/all" onClick={() => location.includes('/') ? setFilters({}) : ''}>
                              <NavListItem >{navText.title1}</NavListItem>
                           </StyledLink>
                           <StyledLink to="/ourStory">
                              <NavListItem>{navText.title3}</NavListItem>
                           </StyledLink>
                        </Left>
                        <Right>
                           <NavListItem style={{ textDecoration: 'none' }}>
                              <SearchBarContainer>
                                 <AiOutlineSearch style={{ marginLeft: '10px' }} />
                                 <Input />
                              </SearchBarContainer>
                           </NavListItem>
                           <NavListItem
                              style={user ? { display: 'none' } : {}}
                              onClick={() => {
                                 toggleViewSignup(true)
                                 toggleViewModal(true)
                              }}>{navText.register}</NavListItem>
                           <NavListItem
                              style={user ? { display: 'none' } : {}}
                              onClick={() => {
                                 toggleViewLogin(true)
                                 toggleViewModal(true)
                              }}>{navText.login}</NavListItem>
                           <NavListItem style={{ position: 'relative' }}>
                              <StyledLink to="/shoppingBag">
                                 <BiShoppingBag style={{ width: '24px', height: '24px' }} />
                                 <NotificationBadge>5</NotificationBadge>
                              </StyledLink>
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
            :
            <MobileNav
               setFilters={setFilters}
               viewModal={viewModal}
               toggleViewModal={toggleViewModal}
            />
         }
      </>
   )
}

export default Navbar
