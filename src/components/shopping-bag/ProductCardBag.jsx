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
   padding: 10px;
   width: 100%;
   height: 270px;
`

const ProductImg = styled.div`
   height: 100%;
   background: url('https://images.pexels.com/photos/15577045/pexels-photo-15577045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
   background-position: center;
   background-size: cover;
`

const ContainerSection = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   flex: 1;
   gap: 4px;
`

const Divider = styled.div`
   height:1px;
   width: 100%;
   background: #c4c4c4;
   margin: 20px 10px;
`

const ProductCardBag = () => {
   return (
      <Container>
         <Divider></Divider>
         <ProductContainer>
            <ContainerSection>
               <ProductImg></ProductImg>
            </ContainerSection>
            <ContainerSection style={{ paddingLeft: '20px' }}>
               <h4>Shirt</h4>
               <h5>$20</h5>
            </ContainerSection>
            <ContainerSection style={{ flex: '0.5' }}>
               <h6>Size: S</h6>
            </ContainerSection>
            <ContainerSection style={{ flex: '0.5' }}>
               <QtyCounter />
            </ContainerSection>
            <ContainerSection>
               <AiOutlineClose style={{ cursor: 'pointer', alignSelf: 'flex-end' }} />
            </ContainerSection>
         </ProductContainer>
      </Container>
   )
}

export default ProductCardBag
