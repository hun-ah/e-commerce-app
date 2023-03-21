import styled from "styled-components"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import CategorySlider from "../components/homepage/CategorySlider"
import EmptyBag from "../components/shopping-bag/EmptyBag"
import StockedBag from "../components/shopping-bag/StockedBag"

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

const ShoppingCart = () => {
   const [bag, setBag] = useState(1)

   return (
      <>
         <Navbar />
         <Spacer />
         <Container>
            {bag < 1 ? <EmptyBag /> : <StockedBag />}
         </Container>
         <CategorySlider />
         <Footer />
      </>
   )
}

export default ShoppingCart
