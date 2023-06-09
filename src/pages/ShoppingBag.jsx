import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import CategorySlider from "../components/homepage/CategorySlider"
import EmptyBag from "../components/shopping-bag/EmptyBag"
import StockedBag from "../components/shopping-bag/StockedBag"
import { useSelector } from 'react-redux'

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   margin-top: 104px;
`

const ShoppingCart = ({ setFilters, quantity, setQuantity, stripeToken, setStripeToken, tokenForCompare, setTokenForCompare, searched, setSearched }) => {
   const cartQuantity = useSelector(state => state.cart.quantity)

   return (
      <>
         <Navbar setFilters={setFilters} searched={searched} setSearched={setSearched} />
         <Spacer />
         <Container>
            {cartQuantity < 1 ? <EmptyBag /> : <StockedBag quantity={quantity} setQuantity={setQuantity} stripeToken={stripeToken} setStripeToken={setStripeToken} tokenForCompare={tokenForCompare} setTokenForCompare={setTokenForCompare} />}
         </Container>
         <CategorySlider setFilters={setFilters} />
         <Footer />
      </>
   )
}

export default ShoppingCart
