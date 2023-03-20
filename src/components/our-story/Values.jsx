import styled from "styled-components"

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   padding: 0 20px;
   height: 350px;
   width: 100%;
   margin-bottom: 60px;

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }

   & h3 {
      font-size: 66px;
   }
`

const ValuesContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   gap: 30px;
   padding-top: 80px;

   & h4{
      font-size: 30px;
   }
`

const Value = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 25%;

`

const Values = () => {
   return (
      <Container>
         <Section>
            <h3>Our Values</h3>
            <ValuesContainer>
               <Value>
                  <h4>Act with purpose</h4>
                  <p>We design durable products that blend timeless style with functional features that help lay the foundation for better living.</p>
               </Value>
               <Value>
                  <h4>Create communities</h4>
                  <p>We bring together a community of passionate and diverse individuals who want to be part of something bigger.</p>
               </Value>
               <Value>
                  <h4>Inspire innovation</h4>
                  <p>We are a forward-thinking brand that delivers cutting-edge products to fit our customers' modern and evolving lifestyles.</p>
               </Value>
               <Value>
                  <h4>Be authentic</h4>
                  <p>We are driven by passion, not ego. We recognize and celebrate our individuality, strengths, and even weaknesses, but remain humble and open to continuous improvement.</p>
               </Value>
            </ValuesContainer>
         </Section>
      </Container>
   )
}

export default Values
