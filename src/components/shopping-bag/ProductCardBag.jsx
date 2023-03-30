import styled from "styled-components"
import { AiOutlineClose } from 'react-icons/ai'
import QtyCounter from "./QtyCounter"

const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`

const ProductContainer = styled.div`
   display: flex;
   gap: 24px;
   width: 100%;
   height: 100%;
   color: #2D2B2B;

      @media screen and (max-width: 499px){
      flex-direction: column;
   }
`

const Left = styled.div`
   
`

const Right = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const ProductImg = styled.div`
   height: 300px;
   width: 250px;
   background: url(${({ img }) => img});
   background-size: cover;

   @media screen and (max-width: 499px){
      width: 100%;
      background-position: center;
   }
`

const ContainerSection = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 4px;

   & h4 {
      font-size: 16px;
      line-height: 24px;
   }

   & h5 {
      font-size: 16px;
      line-height: 24px;
      align-self: flex-end;
   }

   & h6 {
      font-size: 12px;
      line-height: 18px;
      color: #736F6F;
   }

   @media screen and (max-width:520px){
      & h4 {
         width: 80%;
      }
   }
`

const Divider = styled.div`
   height:1px;
   width: 100%;
   background: #c4c4c4;
   margin: 24px 0px;
`

const ProductCardBag = ({ img, title, price, size, quantity, setQuantity }) => {
   return (
      <Container>
         <Divider></Divider>
         <ProductContainer>
            <Left style={{ flex: 0.5 }}>
               <ContainerSection>
                  <ProductImg img={img}></ProductImg>
               </ContainerSection>
            </Left>
            <Right style={{ flex: 2 }}>
               <ContainerSection>
                  <h4>{title}</h4>
                  <AiOutlineClose style={{ cursor: 'pointer', height: '17px', width: '17px', position: 'absolute', right: '0' }} />
                  <h6>Size: {size}</h6>
               </ContainerSection>
               <ContainerSection style={{ justifyContent: 'space-between' }}>
                  {/* <QtyCounter quantity={quantity} setQuantity={setQuantity} /> */}
                  <h5>${price}</h5>
               </ContainerSection>
            </Right>
         </ProductContainer>
      </Container>
   )
}

export default ProductCardBag
