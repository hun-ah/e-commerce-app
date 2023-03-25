import styled from 'styled-components'
import { homepageImgs } from '../../data/homepage'
import Spacer from '../Spacer'
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   position: relative;
   background-image: url(${homepageImgs[0].img});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;

   &::before {
      content: '';
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background: rgba(0,0,0,0.4);
   }
`

const Container = styled.div`
   margin-top: 160px;
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const HeadingText = styled.h1`
   font-family: 'Poppins';
   font-weight: 700;
   font-size: 70px;
   line-height: 125%;
   text-align: center;
   letter-spacing: -0.03em;
   color: #FFF;
`

const Button = styled.button`
   padding: 16px 32px;
   margin-top: 40px;
   width: 160px;
   height: 56px;
   background: rgba(0, 0, 0, 0.1);
   border: 1px solid #F9F9F9;

   font-family: 'Poppins';
   font-style: normal;
   font-size: 14px;
   line-height: 24px;
   color: #F9F9F9;
   cursor: pointer;
   transition: .1s ease-in-out;

   &:hover {
      background: rgba(0, 0, 0, 0.4);
      text-decoration: underline;
   }
`

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #FFF;
`

const Header = ({ setFilters }) => {
   const goToProductPage = true
   return (
      <>
         <Spacer></Spacer>
         <StyledHeader>
            <Container>
               <HeadingText>
                  Spring has most <br /> <span style={{ fontStyle: 'italic' }}>definitely</span> sprung.
               </HeadingText>
               <StyledLink to="/productList/all" onClick={() => goToProductPage ? setFilters({}) : ''}>
                  <Button>Shop spring</Button>
               </StyledLink>
            </Container>
         </StyledHeader>
      </>
   )
}

export default Header
