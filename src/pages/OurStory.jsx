import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import Impact from "../components/our-story/Impact"
import HowItStarted from "../components/our-story/HowItStarted"
import Values from "../components/our-story/Values"


const Header = styled.header`
   font-family: 'Poppins', sans-serif;
   color: #FFF;
   position: relative;
   height: 85vh;
   background-image: url('https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;


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

const Heading1 = styled.h1`
   position: relative;
   font-size: 70px;
   font-weight: 700;
   line-height: 125%;
   letter-spacing: -0.03em;

   @media screen and (max-width:500px){
      font-size: 46px;
   }
`

const Heading2 = styled.h2`
   position: relative;
   font-size: 24px;
   line-height: 36px;
   text-align: center;

   @media screen and (max-width:500px){
      width: 60%;
   }
`

const OurStory = ({ setFilters }) => {
   return (
      <>
         <Navbar setFilters={setFilters} />
         <Spacer />
         <Header>
            <Heading1>Our Story</Heading1>
            <Heading2>Designed in Canada. Sustainably chic.</Heading2>
         </Header>
         <HowItStarted />
         <Impact />
         <Values />
         <Footer />
      </>
   )
}

export default OurStory
