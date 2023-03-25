import styled from 'styled-components'
import {
   FaFacebookF,
   FaPinterestP,
   FaTwitter,
   FaInstagram
} from 'react-icons/fa'
import navText from '../data/navText'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const Container = styled.div`
   width: 100%;
   height: 150px;
   background: #2D2B2B;
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledFooter = styled.footer`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 50px;
   color: white;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const Top = styled.div`
   height: 60%;
   display: flex;
   align-items: center;
   padding: 0 40px;
   justify-content: space-between;
`

const Bottom = styled.div`
   height: 40%;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
`

const IconContainer = styled.div`
   display: flex;
   gap: 30px;

   & * {
      cursor: pointer;
   }
`

const FooterText = styled.ul`
   display: flex;
   gap: 30px;
`

const FooterLi = styled.li`
   cursor: pointer;
`

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #FFF;
`

const Copyright = styled.small`
   font-size: 12px;
`

const Footer = () => {
   // scroll to top of screen on render
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <Container>
         <StyledFooter>
            <Top>
               <FooterText>
                  <StyledLink to="/" style={{ fontWeight: '700' }}>
                     HM&CO
                  </StyledLink>
               </FooterText>
               <IconContainer>
                  <StyledLink to="https://www.facebook.com">
                     <FaFacebookF />
                  </StyledLink>
                  <StyledLink to="https://www.twitter.com">
                     <FaTwitter />
                  </StyledLink>
                  <StyledLink to="https://www.instagram.com">
                     <FaInstagram />
                  </StyledLink>
                  <StyledLink to="https://www.pinterest.com">
                     <FaPinterestP />
                  </StyledLink>
               </IconContainer>
            </Top>
            <Bottom>
               <Copyright style={{ color: '#B9B9B9' }}>&copy; {navText.companyName.toUpperCase()} 2023 | Privacy | Terms of use</Copyright>
            </Bottom>
         </StyledFooter>
      </Container>
   )
}

export default Footer
