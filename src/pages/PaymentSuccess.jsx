import styled from "styled-components"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import CategorySlider from '../components/homepage/CategorySlider'

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

const SuccessPage = styled.div`
   font-family: 'Poppins', sans-serif;
   margin: 104px 20px 0px 20px;
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: 16px;
   color: #2D2B2B;
   font-size: 16px;
   line-height: 24px;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }

   & h2 {
      font-size: 24px;
      line-height: 36px;
   }
`

const PaymentSuccess = ({ stripeToken, setFilters }) => {
   return (
      <>
         <NavBar />
         <Spacer />
         <Container>
            <SuccessPage>
               <h1>{`Order #${Math.floor(Math.random() * 10000000)}`}</h1>
               <h2>{`Thanks for your order, ${stripeToken.card.name.split(' ')[0]}!`}</h2>
               <h3>{`An email confirmation has been sent to ${stripeToken.email}`}</h3>
            </SuccessPage>
         </Container>
         <CategorySlider setFilters={setFilters} />
         <Footer />
      </>
   )
}

export default PaymentSuccess
