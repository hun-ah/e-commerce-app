import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Spacer from '../components/Spacer'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

const Container = styled.div`
   width: 100%;
   background: #2D2B2B;
   flex: 1;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   color: #F9F9F9;
   padding: 104px 20px;
   margin: auto;

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }
`

const TextContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 24px;
   font-size: 16px;
   line-height: 24px;

   & h1 {
      font-size: 46px;
      line-height: 125%;
      letter-spacing: -0.03em;
   }
`

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #FFF;
     padding: 16px 32px;
      border: 1px solid #F9F9F9;
      text-align: center;
      width: 233px;
      cursor: pointer;
`

const NotFound = ({ setFilters, searched, setSearched }) => {
   return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
         <Navbar setFilters={setFilters} searched={searched} setSearched={setSearched} />
         <Spacer />
         <Container>
            <Section>
               <TextContainer>
                  <span>404</span>
                  <h1>How did you get here?</h1>
                  <StyledLink to='/'>
                     <span>Back to HM&CO</span>
                  </StyledLink>
               </TextContainer>
            </Section>
         </Container>
         <Footer />
      </div>
   )
}

export default NotFound
