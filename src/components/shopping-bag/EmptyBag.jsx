import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   width: 100%;
   height: 400px;
   padding: 0 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 6px;

   & h1 {
      font-size: 40px;
   }

   & p {
      margin-top: 40px;
   }

   & span {
      cursor: pointer;
      border-bottom: 1px solid black;
      width: fit-content;
   }

   @media screen and (min-width: 1500px){
      width:1500px;
   }
`

const EmptyBag = () => {
   return (
      <Container>
         <Section>
            <h1>My Bag</h1>
            <p>You haven't put any items in your bag.</p>
            <span>Start shopping</span>
         </Section>
      </Container>
   )
}

export default EmptyBag
