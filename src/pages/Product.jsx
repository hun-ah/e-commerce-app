import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Spacer from "../components/Spacer"
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"

const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
`

const ProductPage = styled.section`
   display: flex;
   height: auto;
   width: 100%;
   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const Divider = styled.div`
   width: 100%;
   height: 1px;
   background: #e7e7e7;
`

const Left = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   padding: 20px;
   width: 72%;
   height: 100%;
`

const Right = styled.div`
   padding: 20px 20px 0 0;
   width: 38%;
   height: 100%;
`

const ProductImg = styled.div`
   background-image: url(${({ img }) => img});
   background-position: center;
   background-size: cover;
   min-width: 445px;
   min-height: 590px;
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
   transition: .2s ease-in-out;

   &:hover {
      background: #ececec;
   }
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

const Overview = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   padding: 20px 0;
   gap: 10px;

   & h3 {
      font-size: 18px;
   }

   & p {
      font-size: 14px;
   }
`

const Product = ({ setFilters }) => {
   const [product, setProduct] = useState({})
   const location = useLocation().pathname
   const param = location.split('/')[2]

   useEffect(() => {
      const getProduct = async () => {
         try {
            const res = await fetch(`http://localhost:5000/api/product/find/${param}`)
            const data = await res.json()
            setProduct(data)
         } catch (err) {
            console.log(err)
         }
      }
      getProduct()
   }, [param]
   )

   return (
      <>
         <Navbar setFilters={setFilters} />
         <Spacer />
         <Container>
            <ProductPage>
               <Left>
                  {product.img && product.img.map(img => <ProductImg key={img} img={img}></ProductImg>)}
               </Left>
               <Right>
                  <TitleInfo>
                     <Name>{product.title}</Name>
                     <Price>{`$${product.price}`}</Price>
                  </TitleInfo>
                  <Divider></Divider>
                  <SizesContainer>
                     <h2>Select a size</h2>
                     <Sizes>
                        {product.size && product.size.map(size => <Size key={size}>{size}</Size>)}
                     </Sizes>
                  </SizesContainer>
                  <Divider></Divider>
                  <AddToCart>Add to cart</AddToCart>
                  <Divider></Divider>
                  <Overview>
                     <h3>Overview</h3>
                     <p>{product.desc}</p>
                  </Overview>
                  <Divider></Divider>
               </Right>
            </ProductPage>
         </Container>
         <Footer />
      </>
   )
}

export default Product
