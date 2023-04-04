import styled from "styled-components";
import ProductCardBag from "./ProductCardBag";
import Checkout from './Checkout'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   min-height: 400px;
   padding: 0 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   & h1 {
      font-size: 24px;
      line-height: 36px;
   }

   @media screen and (min-width: 1500px){
      width:1500px;
   }
`

const HeadingText = styled.div`
   
`

const MainContent = styled.div`
   display: flex;
   gap: 20px;

   @media screen and (max-width: 1100px){
     flex-direction: column;
   }
`

const Left = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;

   @media screen and (max-width: 1100px){
     width: 100%;
   }
`

const Right = styled.div`
   padding: 20px 0 20px 10px;
   width: 40%;

   @media screen and (max-width: 1100px){
     padding: 20px 0 0px 0px;
     width: 100%;
   }
`

const StockedBag = ({ quantity, setQuantity, stripeToken, setStripeToken, tokenForCompare, setTokenForCompare }) => {
   const cart = useSelector(state => state.cart)
   console.log(cart)

   return (
      <Container>
         <Section>
            <HeadingText>
               <h1>My Bag</h1>
            </HeadingText>
            <MainContent>
               <Left>
                  {cart.products.map(product => <ProductCardBag key={uuidv4()} quantity={quantity} setQuantity={setQuantity} product={product} />)}
               </Left>
               <Right>
                  <Checkout stripeToken={stripeToken} setStripeToken={setStripeToken} tokenForCompare={tokenForCompare} setTokenForCompare={setTokenForCompare} />
               </Right>
            </MainContent>
         </Section>
      </Container>
   )
}

export default StockedBag