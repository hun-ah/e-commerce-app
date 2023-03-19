import styled from 'styled-components'
import {
   FaFacebookF,
   FaPinterestP,
   FaTwitter,
   FaInstagram
} from 'react-icons/fa'
import navText from '../data/navText'

const Container = styled.div`
   width: 100%;
   height: 70px;
   background: #000;
   display: flex;
   align-items: center;
   justify-content: center;
`

const StyledFooter = styled.footer`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   display: flex;
   flex-direction: column;
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
   justify-content: center;
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

const Copyright = styled.small`
   font-size: 12px;
`

const Footer = () => {
   return (
      <Container>
         <StyledFooter>
            <Top>
               <IconContainer>
                  <FaFacebookF />
                  <FaTwitter />
                  <FaInstagram />
                  <FaPinterestP />
               </IconContainer>
               <FooterText>
                  <FooterLi>{navText.title1}</FooterLi>
                  <FooterLi>{navText.title3}</FooterLi>
               </FooterText>
            </Top>
            <Bottom>
               <Copyright>&copy; {navText.companyName.toUpperCase()} 2023</Copyright>
            </Bottom>
         </StyledFooter>
      </Container>
   )
}

export default Footer
