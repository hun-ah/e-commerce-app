import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import HowItStarted from "../components/our-story/HowItStarted"
import Values from "../components/our-story/Values"

const OurStoryContainer = styled.div`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   display: flex;
   justify-content: center;
   margin: 0 auto;

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }
`

const Header = styled.header`
   font-family: 'Poppins', sans-serif;
   color: #FFF;
   position: relative;
   height: 90vh;
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
   font-size: 110px;
   position: relative;
`

const Heading2 = styled.h2`
   font-size: 26px;
   position: relative;
   line-height: 1.3;
`

const SectionText1 = styled.section`
   display: flex;
   justify-content: center;
   text-align: center;
   font-size: 18px;
   width: 52%;
   margin: 0 auto;
   padding: 100px 0;
`

const OurStory = ({ setFilters }) => {
   return (
      <>
         <Navbar setFilters={setFilters} />
         <Spacer />
         <Header>
            <Heading1>Our Story</Heading1>
            <Heading2>Designed in Canada</Heading2>
            <Heading2>Sustainably chic</Heading2>
         </Header>
         <OurStoryContainer>
            <SectionText1>
               We believe in considering the impact of the choices we make every day and view those choices as an opportunity to better ourselves. Our purpose is to Inspire a Better way of Living by creating conscious products that last through time. By marrying innovation with eco-friendly processes, we strive to help shape a cleaner, healthier, and more mindful world where human progress is in harmony with the planet's well-being.
            </SectionText1>
         </OurStoryContainer>
         <HowItStarted />
         <Values />
         <Footer />
      </>
   )
}

export default OurStory
