import styled from 'styled-components'
import { homepageImgs } from '../data/homepage'

const Section = styled.section`
   font-family: 'Poppins', sans-serif;
   height: 100vh;
   width: 100%;
   display: flex;
   margin: 20px 0;
`

const Left = styled.div`
   width: 50%;
   height: 100%;
   padding: 20px;
`

const Right = styled.div`
   display: flex;
   flex-direction: column;
   gap: 200px;
   width: 50%;
   height: 100%;
   padding: 20px;

   & h2 {
      font-size: 18px;
   }

   & p {
      font-size: 54px;
   }
`

const ImgContainer = styled.div`
   background-image: url(${homepageImgs[1].img});
   background-position: center;
   width: 100%;
   height: 100%;
   cursor: pointer;
`
const SloganContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
`
const ShopNow = styled.a`
   cursor: pointer;
   width: fit-content;
   font-size: 14px;
   border-bottom: 1px solid black;
`

const NewCollection = () => {
   return (
      <Section>
         <Left>
            <ImgContainer></ImgContainer>
         </Left>
         <Right>
            <h2>NEW AROUND HERE</h2>
            <SloganContainer>
               <p>New styles and colours for your spring debut. Flowers aren't the only thing in bloom.</p>
               <ShopNow>SHOP NOW</ShopNow>
            </SloganContainer>
         </Right>
      </Section>
   )
}

export default NewCollection
