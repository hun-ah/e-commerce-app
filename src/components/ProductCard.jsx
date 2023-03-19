import styled from "styled-components";

const StyledProductCard = styled.div`
   flex-direction: column;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   height: 480px;
   width: 330px;
   cursor: pointer;
`

const ProductImg = styled.div`
   background-image: url(${({ img }) => img});
   background-position: center;
   position: relative;
   display: flex;
   justify-content: center;
   min-height: 90%;
   min-width: 100%;
   transition: .2s ease-in-out;

   &:hover {
      opacity: 0.6;
   }
`

const AddToCart = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 30px;
   width: 90%;
   background: #FFF;
   position: absolute;
   bottom: 10px;
   transition: .1s ease-in-out;
   opacity: 0.4;

   &:hover {
      opacity: 1;
      background: #000;
      color: #FFF;
   }
`

const ProductText = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin-top: 10px;
`

const ProductCard = ({ name, price, category, img }) => {
   return (
      <StyledProductCard>
         <ProductImg img={img}>
            <AddToCart>Add To Cart</AddToCart>
         </ProductImg>
         <ProductText>
            <span>{name}</span>
            <span>{`$${price}`}</span>
         </ProductText>
      </StyledProductCard>
   )
}

export default ProductCard
