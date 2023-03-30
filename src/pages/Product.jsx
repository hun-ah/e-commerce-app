import styled from "styled-components"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import Spacer from "../components/Spacer"
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
`

const ProductPage = styled.section`
   margin: 104px 20px;
   display: flex;
   height: auto;
   width: 100%;
   gap: 12px;
   color: #2D2B2B;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }

   @media screen and (max-width: 1100px) {
    gap: 20px;
    flex-direction: column;
   }
`


const Left = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 8px;
   width: 72%;

   &::-webkit-scrollbar{
      display: none;
   }

   @media screen and (max-width: 1100px) {
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
   }
`

const Right = styled.div`
   width: 35%;
   height: fit-content;
   display: flex;
   flex-direction: column;
   gap: 40px;
   
   @media screen and (max-width: 1100px) {
    width: 100%;
   }

   @media (min-width: 800px) and (max-width: 1099px){
      width: 70%;
   }

`

const ProductImg = styled.div`
   background-image: url(${({ img }) => img});
   background-position: center;
   background-size: cover;
   width: 49%;
   min-height: 590px;

   @media screen and (max-width: 1100px){
      width: 90%;
      flex-shrink: 0;
   }
`

const TitleInfo = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 8px;
   width: 100%;
`

const Name = styled.h1`
   font-size: 24px;
   line-height: 36px;
`

const Price = styled.span`
   font-size: 16px;
   line-height: 24px;
`

const SizesContainer = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 10px;

   & h2 {
      font-size: 12px;
      line-height: 18px;
   }
`

const Sizes = styled.div`
   display: flex;
   gap: 8px;
`

const Size = styled.label`
   cursor: pointer;
   background: #F9F9F9;
   border: 1px solid #2D2B2B;
   padding: 10px;
   transition: .2s ease-in-out;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 8px 16px;

   &:hover {
      background: rgb(43, 43, 43);
      color: #F9F9F9;
   }
`

const SizeInput = styled.input`
   appearance: none;
   position: absolute;
`

const AddToCart = styled.button`
   font-family: 'Poppins', sans-serif;
   background: #2d2b2b;
   opacity: ${({ productSize }) => !productSize && 0.3};
   color: #F9F9F9;
   width: 100%;
   border: none;
   padding: 16px 32px;
   margin-top: -24px;
   cursor: ${({ productSize }) => productSize && 'pointer'};
`

const Overview = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   flex-direction: column;
   gap: 10px;

   & h3 {
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
   }

   & p {
      font-size: 12px;
      line-height: 18px;
   }
`

const Product = ({ setFilters, quantity }) => {
   const [product, setProduct] = useState({})
   const [productSize, setProductSize] = useState('')
   const location = useLocation().pathname
   const id = location.split('/')[2]
   const dispatch = useDispatch()

   const handleInputChange = (e) => {
      const { value } = e.target
      setProductSize(value)
   }

   useEffect(() => {
      const getProduct = async () => {
         try {
            const res = await fetch(`http://localhost:5000/api/product/find/${id}`)
            const data = await res.json()
            setProduct(data)
         } catch (err) {
            console.log(err)
         }
      }
      getProduct()
   }, [id]
   )

   const handleClick = () => {
      productSize && dispatch(addProduct({ ...product, quantity, productSize }))
   }

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
                  <SizesContainer>
                     <h2>Select a size</h2>
                     <Sizes>
                        {product.size && product.size.map(size => {
                           return <Size key={size} style={productSize === size ? { background: '#2D2B2B', color: '#F9F9F9' } : {}}>
                              {size}
                              <SizeInput
                                 type='radio'
                                 name='size'
                                 value={size}
                                 onChange={handleInputChange}
                              />
                           </Size>
                        })}
                     </Sizes>
                  </SizesContainer>
                  <AddToCart onClick={handleClick} productSize={productSize}>{productSize ? 'Add to cart' : 'Select a size'}</AddToCart>
                  <Overview>
                     <h3>Overview</h3>
                     <p>{product.desc}</p>
                  </Overview>
               </Right>
            </ProductPage>
         </Container>
         <Footer />
      </>
   )
}

export default Product
