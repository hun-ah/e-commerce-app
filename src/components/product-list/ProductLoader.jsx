import styled from "styled-components";

const StyledProductCard = styled.div`
   position: relative;
   flex-direction: column;
   height: 500px;
   width: 350px;
   margin-bottom: 10px;

   @media screen and (max-width: 1500px){
      width: 24%;
   }

   @media screen and (max-width: 1240px){
    width: 32% ;
   }

   @media screen and (max-width: 890px){
    width: 48% ;
   }

   @media screen and (max-width: 675px){
    width: 100% ;
   }
`

const ProductImg = styled.div`
   position: relative;
   display: flex;
   min-height: 90%;
   min-width: 100%;
   background: #e2e2e2;
  background-image: linear-gradient(to right, #e2e2e2 0%, #ebebeb 20%, #e2e2e2 40%, #e2e2e2 100%);
  background-repeat: no-repeat;
  animation-duration: 1s;
  animation-fill-mode: forwards; 
  animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  animation-timing-function: linear;

  @keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }
  
  100% {
    background-position: 468px 0; 
  }
}
`

const ProductText = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin-top: 16px;
   color: #2D2B2B;
`

const ProductLoader = () => {

   return (
      <StyledProductCard>
         <ProductImg></ProductImg>
         <ProductText></ProductText>
      </StyledProductCard>
   )
}

export default ProductLoader