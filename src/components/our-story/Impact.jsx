import styled from "styled-components"

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Section = styled.section`
   display: flex;
   justify-content: center;
   text-align: center;
   gap: 40px;
   font-size: 18px;
   font-family: 'Poppins', sans-serif;
   background: #2D2B2B;
   color: #F9F9F9;
   width: 100%;
   padding: 104px 48px;

   & h3 {
      width: 80%;
      font-size: 46px;
      line-height: 125%;
      letter-spacing: -0.03em;
      color: #F9F9F9;
   }

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }
`

const Impact = () => {
   return (
      <Container>
         <Section>
            <h3>We believe in considering the impact of the choices we make every day and view those choices as an opportunity to be better.</h3>
         </Section>
      </Container>
   )
}

export default Impact
