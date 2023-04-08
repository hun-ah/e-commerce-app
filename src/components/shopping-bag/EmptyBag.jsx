import styled from "styled-components";
import { Link } from "react-router-dom";


const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   height: 200px;
   padding: 0 20px;
   display: flex;
   flex-direction: column;
   gap: 6px;
   color: #2D2B2B;

   & h1 {
      font-size: 24px;
      line-height: 36px;
   }

   & p {
      margin-top: 20px;
   }

   & span {
      cursor: pointer;
      width: fit-content;
   }

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const StyledLink = styled(Link)`
     margin-top: 12px;
     text-decoration: none;
     color: #2D2B2B;
     width: fit-content;
     border-bottom: 1px solid #2D2B2B;;


     &:hover{
        color: #888585;
        border-color: #888585;
     }
`

const EmptyBag = () => {

   return (
      <Container>
         <Section>
            <h1>My Bag</h1>
            <p>You haven't put any items in your bag.</p>
            <StyledLink to='/productList/all'>
               <span>Start shopping</span>
            </StyledLink>
         </Section>
      </Container>
   )
}

export default EmptyBag
