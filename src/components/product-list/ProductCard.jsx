import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useState } from "react";

const StyledProductCard = styled.div`
   position: relative;
   flex-direction: column;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   height: 500px;
   width: 350px;
   margin-bottom: 10px;
   cursor: pointer;

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
   background-image: url(${({ img }) => img});
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;
   display: flex;
   justify-content: center;
   min-height: 90%;
   min-width: 100%;
   transition: .2s ease-in-out;

   &:hover {
      opacity: 0.7;
   }
`

const AddToCart = styled.div`
   font-size: 16px;
   line-height: 24px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 16px 32px;
   width: 95%;
   background: rgb(0, 0, 0, 0.3);
   color: #F9F9F9;
   border: 1px solid #F9F9F9;
   position: absolute;
   bottom: 58px;
   left: 10px;
   transition: .1s ease-in-out;

   &:hover {
      opacity: 1;
      background: #F9F9F9;
      color: #2D2B2B;
   }
`

const ProductText = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin-top: 16px;
   color: #2D2B2B;

   & > span {
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
   }

   & span + span {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
   }
`

const StyledLink = styled(Link)`
     text-decoration: none;
     color: #000;
`

const ProductCard = ({ name, price, img, id }) => {
   const [showButton, setShowButton] = useState(false)

   return (
      <StyledProductCard
         onMouseEnter={() => setShowButton(true)}
         onMouseLeave={() => setShowButton(false)}
      >
         <StyledLink to={`/product/${id}`}>
            <ProductImg
               img={img}
            >
            </ProductImg>
            <ProductText>
               <span>{name}</span>
               <span>{`$${price}`}</span>
            </ProductText>
         </StyledLink>
         {showButton && <AddToCart>Add to cart</AddToCart>}
      </StyledProductCard>
   )
}

export default ProductCard
