import styled from "styled-components"
import { MdOutlineHandshake } from 'react-icons/md'
import { RiHandHeartLine } from 'react-icons/ri'
import { BsLightningCharge } from 'react-icons/bs'
import { TbPlant2 } from 'react-icons/tb'

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
   width: 100%;
   padding: 104px 48px;
   color: #2D2B2B;

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }

   & h3 {
      font-size: 46px;
      line-height: 125%;
      letter-spacing: -0.03em;
   }
`

const ValuesContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;

   gap: 96px;
   padding-top: 80px;

   & h4{
      font-size: 24px;
      line-height: 36px;
   }

   & p {
      font-size: 16px;
      line-height: 24px;
   }

   @media screen and (max-width: 1000px) {
      flex-direction: column;
   }
`

const Value = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   width: 25%;

   @media screen and (max-width: 1000px) {
      width: 100%;
   }
`

const Values = () => {
   return (
      <Container>
         <Section>
            <h3>Our Values</h3>
            <ValuesContainer>
               <Value>
                  <MdOutlineHandshake style={{ width: '24px', height: '24px', color: '#B9B9B9' }} />
                  <h4>Act with purpose</h4>
                  <p>We design durable products that blend timeless style with functional features that help lay the foundation for better living.</p>
               </Value>
               <Value>
                  <RiHandHeartLine style={{ width: '24px', height: '24px', color: '#B9B9B9' }} />
                  <h4>Create communities</h4>
                  <p>We bring together a community of passionate and diverse individuals who want to be part of something bigger.</p>
               </Value>
               <Value>
                  <BsLightningCharge style={{ width: '24px', height: '24px', color: '#B9B9B9' }} />
                  <h4>Inspire innovation</h4>
                  <p>We are a forward-thinking brand that delivers cutting-edge products to fit our customers' modern and evolving lifestyles.</p>
               </Value>
               <Value>
                  <TbPlant2 style={{ width: '24px', height: '24px', color: '#B9B9B9' }} />
                  <h4>Be authentic</h4>
                  <p>We are driven by passion. We recognize and celebrate our individuality, strengths, and even weaknesses, but remain humble and open to improvement.</p>
               </Value>
            </ValuesContainer>
         </Section>
      </Container>
   )
}

export default Values
