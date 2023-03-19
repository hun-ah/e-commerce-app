import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Spacer from "../components/Spacer"
import { productList } from "../data/productList"

const ProductPage = styled.section`
   display: flex;
   height: auto;
   width: 100%;
`

const Divider = styled.div`
   width: 100%;
   height: 1px;
   background: #e7e7e7;
`

const Left = styled.div`
   /* border: 1px solid black; */
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   padding: 20px;
   width: 72%;
   height: 100%;
`

const Right = styled.div`
   /* border: 1px solid black; */
   padding: 20px 20px 0 0;
   width: 38%;
   height: 100%;
`

const ProductImg = styled.div`
   background-image: url(${({ img }) => img});
   width: 445px;
   height: 590px;
`

const TitleInfo = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 14px;
   margin-top: 20px;
   padding-bottom: 40px;
   width: 100%;
`

const Name = styled.h1`
   font-size: 28px;
`

const Price = styled.span`

`

const SizesContainer = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 40px 0;
`

const Sizes = styled.div`
   display: flex;
   gap: 10px;
`

const Size = styled.button`
   cursor: pointer;
   border: 1px solid #e7e7e7;
   border-radius: 5px;
   background: #FFF;
   padding: 10px;
`

const AddToCart = styled.button`
   font-family: 'Poppins', sans-serif;
   background: #000;
   color: #FFF;
   width: 100%;
   border: none;
   padding: 20px 0;
   margin: 20px 0;
   cursor: pointer;
`

const Product = () => {
   return (
      <div>
         <Navbar />
         <Spacer />
         <ProductPage>
            <Left>
               <ProductImg img={productList[7].img}></ProductImg>
               <ProductImg img={productList[7].img}></ProductImg>
               <ProductImg img={productList[7].img}></ProductImg>
               <ProductImg img={productList[7].img}></ProductImg>
            </Left>
            <Right>
               <TitleInfo>
                  <Name>{productList[7].name}</Name>
                  <Price>${productList[7].price}</Price>
               </TitleInfo>
               <Divider></Divider>
               <SizesContainer>
                  <h2>Select a size</h2>
                  <Sizes>
                     <Size>XS</Size>
                     <Size>S</Size>
                     <Size>M</Size>
                     <Size>L</Size>
                     <Size>XL</Size>
                  </Sizes>
               </SizesContainer>
               <Divider></Divider>
               <AddToCart>Add to cart</AddToCart>
               <Divider></Divider>
            </Right>
         </ProductPage>
         <Footer />
      </div>
   )
}

export default Product
