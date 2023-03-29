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
   gap: 4px;
   width: 100%;
   height: 100%;
   color: #2D2B2B;

      @media screen and (max-width: 499px){
      flex-direction: column;
   }
`

const ProductImg = styled.div`
   height: 300px;
   width: 250px;
   background: url(${({ img }) => img});
   background-size: cover;
`

const ContainerSection = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   flex: 1;
   gap: 4px;

   & h4 {
      font-size: 16px;
      line-height: 24px;
   }

   & h5 {
      font-size: 16px;
      line-height: 24px;
   }

   & h6 {
      font-size: 12px;
      line-height: 18px;
      color: #736F6F;
   }
`

const Divider = styled.div`
   height:1px;
   width: 100%;
   background: #c4c4c4;
   margin: 24px 0px;
`

const ProductCardBag = ({ img, title, price, size }) => {
   return (
      <Container>
         <Divider></Divider>
         <ProductContainer>
            <ContainerSection style={{ flex: 1, flexShrink: 0 }}>
               <ProductImg img={img}></ProductImg>
            </ContainerSection>
            <ContainerSection style={{ paddingLeft: '20px', flex: 3 }}>
               <h4>{title}</h4>
               <h6>Size: {size}</h6>
               {/* <QtyCounter /> */}
            </ContainerSection>
            <ContainerSection style={{ justifyContent: 'space-between' }}>
               <AiOutlineClose style={{ cursor: 'pointer', alignSelf: 'flex-end', height: '17px', width: '17px' }} />
               <h5 style={{ alignSelf: 'flex-end' }}>${price}</h5>
            </ContainerSection>
         </ProductContainer>
      </Container>
   )
}

export default ProductCardBag
