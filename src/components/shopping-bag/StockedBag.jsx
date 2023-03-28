import styled from "styled-components";
import ProductCardBag from "./ProductCardBag";
import Checkout from './Checkout'
import { useSelector } from 'react-redux'

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
   margin-top: 70px;

   & h1 {
      font-size: 40px;
      margin-bottom: 40px;
   }

   @media screen and (min-width: 1500px){
      width:1500px;
   }
`

const HeadingText = styled.div`
   
`

const MainContent = styled.div`
   display: flex;
   gap: 30px;
`

const Left = styled.div`
   display: flex;
   flex-direction: column;
   width: 70%;
   padding: 0px 10px 20px 0;
`

const Right = styled.div`
   padding: 20px 0 20px 10px;
   width: 40%;
`

const StockedBag = () => {
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
                  {cart.products.map(product => <ProductCardBag key={product._id} img={product.img[0]} title={product.title} price={product.price} size={product.productSize} />)}
               </Left>
               <Right>
                  <Checkout />
               </Right>
            </MainContent>
         </Section>
      </Container>
   )
}

export default StockedBag