import styled from "styled-components"
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
const KEY = process.env.REACT_APP_STRIPE

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 400px;
   background: #FFF;
   padding: 24px;
   color: #2D2B2B;
`

const Top = styled.div`
   display: flex;
   flex-direction: column;
   padding-bottom: 0;
   gap: 20px;
   flex: 1;
`
const Divider = styled.div`
   height: 1px;
   background: #E7E7E7;
   margin: 20px 0px;
   flex: 0.001;
`

const Bottom = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   justify-content: space-between;
`

const TextContainer = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 12px;
   line-height: 18px;

   & h2 {
      font-size: 24px;
      line-height: 36px;
   }
`

const CheckoutButton = styled.button`
   font-family: 'Poppins', sans-serif;
   font-size: 16px;
   width: 100%;
   height: 60px;
   background: #2D2B2B;
   color: #FFF;
   border: none;
   cursor: pointer;
`

const StripeInfo = styled.span`
   display: inline-block;
   font-size: 10px;
   margin-top: 20px;
`

const Checkout = ({ stripeToken, setStripeToken, tokenForCompare, setTokenForCompare }) => {
   const total = useSelector(state => state.cart.total)
   const shipping = total < 1 ? 0 : 10
   const taxes = total * 0.13
   const finalTotal = (total + shipping + taxes).toFixed(2)
   const navigate = useNavigate()

   const onToken = (token) => {
      setStripeToken(token)
      setTokenForCompare(token)
   }

   // if a token has already been made from a previous purchase, this allows another purchase to go through without immediately redirecting to the success page 
   useEffect(() => {
      if (stripeToken && tokenForCompare) {
         if (stripeToken.id == tokenForCompare.id) {
            navigate('/success')
         }
      }
   }, [navigate, stripeToken])


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
               <span>${finalTotal}</span>
            </TextContainer>
            <StripeCheckout
               name="HM&CO"
               billingAddress
               shippingAddress
               description={`Your total is $${finalTotal}`}
               amount={finalTotal * 100}
               token={onToken}
               stripeKey={KEY}
            >
               <CheckoutButton>Checkout</CheckoutButton>
               <StripeInfo>*To checkout, please use stripe card: 4242 4242 4242 4242, Expiry: 1234 and CVC: 123</StripeInfo>
            </StripeCheckout>
         </Bottom>
      </Container>
   )
}

export default Checkout
