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
   padding: 0 20px 100px 20px;
   height: 600px;
   width: 100%;

   @media screen and (min-width: 1500px) {
      width: 1500px;
   }
`

const Left = styled.div`
   width: 50%;
   background-image: url('https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
   background-position: center;
   background-size: cover;
`

const Right = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 20px;
   gap: 20px;
   width: 50%;

   & h2 {
      font-size: 66px;
   }
`

const HowItStarted = () => {
   return (
      <Container>
         <Section>
            <Left></Left>
            <Right>
               <h2>How It Started</h2>
               <p>HM&CO was founded in Montreal in 2012, with a mission to create an apparel brand that would speak to a new generation of creatives and entrepreneurs.

                  What once started as a favourite in Montreal’s Mile End quickly blossomed into one of Canada’s leading lifestyle brands and digital retailers.

                  A certified B Corp, HM&CO is now a leader in sustainable fashion and using innovative fabrics from nature to make products that are thoughtfully designed to help you live better, enjoy more, and feel good in everything you wear.</p>
            </Right>
         </Section>
      </Container>
   )
}

export default HowItStarted
