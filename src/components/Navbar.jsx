import styled from 'styled-components'
import MobileNav from './MobileNav'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import navText from '../data/navText'
import LoginSignupBackground from './login-signup/LoginSignupBackground'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchInput, loadingFalse, loadingTrue } from '../redux/searchRedux'

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

const SearchBarContainer = styled.form`
   border-radius: 30px;
   background: #F9F9F9;
   display: flex;
   flex-direction: row-reverse;
   align-items: center;

   & button {
      background: transparent;
      margin-left: 10px;
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
   }
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
   color: #F9F9F9;
   position: absolute;
   top: -4px;
   left: 12px;
`

const Navbar = ({ setFilters, searched, setSearched }) => {
   const quantity = useSelector(state => state.cart.quantity)
   const [viewSignup, setViewSignup] = useState(false)
   const [viewLogin, setViewLogin] = useState(false)
   const [viewModal, setViewModal] = useState(false)
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
   const [search, setSearch] = useState('')
   const location = useLocation().pathname
   const navigate = useNavigate()
   const dispatch = useDispatch()

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

   const fetchData = async () => {
      try {
         const res = await fetch(`https://e-commerce-api.cyclic.app/api/product/search/${search}`)
         const data = await res.json()
         setSearched(data)
         dispatch(searchInput(search))
         dispatch(loadingFalse())
      } catch (err) {
         console.log(err)
      }
   }

   const productSearch = (e) => {
      e.preventDefault()
      fetchData()
      setSearch('')
      dispatch(loadingTrue())
      navigate(`/search`)
   }

   return (
      <>
         {windowWidth > 770 ?
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
                              <SearchBarContainer onSubmit={(e) => productSearch(e)}>
                                 <Input
                                    type='text'
                                    placeholder='Search'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                 />
                                 <button>
                                    <AiOutlineSearch style={{ width: '16px', height: '16px' }} />
                                 </button>
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
                                 {quantity >= 1 && <NotificationBadge>{quantity}</NotificationBadge>}
                              </StyledLink>
                           </NavListItem>
                        </Right>
                     </NavList>
                  </Nav>
               </NavContainer>
            </>
            :
            <MobileNav
               quantity={quantity}
               setFilters={setFilters}
               toggleViewModal={toggleViewModal}
               toggleViewLogin={toggleViewLogin}
               toggleViewSignup={toggleViewSignup}
               searched={searched}
               setSearched={setSearched}
               search={search}
               setSearch={setSearch}
            />
         }
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
