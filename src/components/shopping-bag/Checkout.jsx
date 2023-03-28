import styled from "styled-components"
import { useSelector } from 'react-redux'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 400px;
   background: #f1f1f1;
`

const Top = styled.div`
   display: flex;
   flex-direction: column;
   padding: 40px;
   padding-bottom: 0;
   gap: 20px;
   flex: 1;
`
const Divider = styled.div`
   height: 1px;
   background: black;
   margin: 20px 40px;
   flex: 0.001;
`

const Bottom = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 40px 40px 40px;
   flex: 1;
   justify-content: space-between;
`

const TextContainer = styled.div`
   display: flex;
   justify-content: space-between;
`

const CheckoutButton = styled.button`
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   width: 100%;
   height: 60px;
   background: #000;
   color: #FFF;
   border: none;
   cursor: pointer;
`

const Checkout = () => {
   const total = useSelector(state => state.cart.total)
   const shipping = total < 1 ? 0 : 10
   const taxes = total * 0.13

   return (
      <Container>
         <Top>
            <TextContainer>
               <h2>Order Summary</h2>
            </TextContainer>
            <TextContainer>
               <span>Subtotal</span>
               <span>${total}</span>
            </TextContainer>
            <TextContainer>
               <span>Shipping</span>
               <span>${shipping}</span>
            </TextContainer>
            <TextContainer>
               <span>Taxes</span>
               <span>${taxes.toFixed(2)}</span>
            </TextContainer>
         </Top>
         <Divider></Divider>
         <Bottom>
            <TextContainer>
               <span>Estimated Total</span>
               <span>${(total + shipping + taxes).toFixed(2)}</span>
            </TextContainer>
            <CheckoutButton>Checkout</CheckoutButton>
         </Bottom>
      </Container>
   )
}

export default Checkout
