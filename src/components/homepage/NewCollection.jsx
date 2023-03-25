import styled from 'styled-components'
import { homepageImgs } from '../../data/homepage'
import { Link } from "react-router-dom"
import { useEffect } from 'react'

const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   display: flex;
   margin: 60px 0;
   margin-bottom: 100px;


   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const Left = styled.div`
   width: 50%;
   height: 100%;
   padding: 20px;
`

const Right = styled.div`
   display: flex;
   flex-direction: column;
   color: #2D2B2B;
   gap: 200px;
   width: 50%;
   height: 100%;
   padding: 20px;

   & h2 {
      font-size: 16px;
   }

   & p {
      font-size: 46px;
      line-height: 125%;
      letter-spacing: -0.03em;
   }
`

const ImgContainer = styled.div`
   background-image: url(${homepageImgs[1].img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   width: 100%;
   height: 750px;
`
const SloganContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
`
const ShopNow = styled.button`
   font-family: 'Poppins', sans-serif;
   background: #F9F9F9;
   font-size: 14px;
   padding: 16px 32px;
   margin-top: 40px;
   width: 160px;
   height: 56px;
   border: 1px solid #2D2B2B;
   line-height: 24px;
   color: #2D2B2B;
   cursor: pointer;
   transition: .1s ease -in -out;

   &:hover {
   border-color: #888585;
   color: #888585;
   text-decoration: underline;
}
`

const StyledLink = styled(Link)`
     text-decoration: none;
   color: #2D2B2B;

`

const NewCollection = ({ setFilters }) => {
   const goToProductPage = true

   // scroll to top of screen on render
   useEffect(() => {
      window.scrollTo(0, 0)
   }, [])

   return (
      <Container>
         <Section>
            <Left>
               <ImgContainer></ImgContainer>
            </Left>
            <Right>
               <h2>NEW AROUND HERE</h2>
               <SloganContainer>
                  <p>New styles and colours for your spring debut. Flowers aren't the only thing in bloom.</p>
                  <StyledLink to='/productList/all' onClick={() => goToProductPage ? setFilters({}) : ''}>
                     <ShopNow>Shop spring</ShopNow>
                  </StyledLink>
               </SloganContainer>
            </Right>
         </Section>
      </Container>
   )
}

export default NewCollection
