import styled from "styled-components"
import navText from '../data/navText'
import Burger from "./Burger"
import { useState } from 'react'
import { Link } from "react-router-dom"
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
   position: absolute;
   top: -4px;
   left: 12px;
`

const MobileNav = () => {
   const [showSearchBar, setShowSearchBar] = useState(false)
   const [openBurger, setOpenBurger] = useState(false)

   const handleSearchBar = () => {
      setShowSearchBar(prevState => !prevState)
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
                           <NotificationBadge>5</NotificationBadge>
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
      </>
   )
}

export default MobileNav
