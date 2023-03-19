import styled from "styled-components"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Spacer from "../components/Spacer"
import { productList } from "../data/productList"

const ProductSection = styled.section`
   display: flex;
   flex-direction: column;
`

const HeadingText = styled.h1`
   font-family: 'Poppins', sans-serif;
   font-size: 30px;
   width: 60%;
   padding: 20px;
`
const Filters = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   height: 30px;
   padding: 0 20px;
   margin: 20px 0;
`

const Filter = styled.div`
font-family: 'Poppins', sans-serif;
font-size: 14px;
`

const Select = styled.select`
font-family: 'Poppins', sans-serif;
padding: 2px;
margin: 10px;
cursor: pointer;
`

const Option = styled.option`
   
`

const Products = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 24px;
   padding: 20px 20px;
   margin-bottom: 40px;
   width: 100%;
`

const products = productList.map(obj => {
   return <ProductCard key={obj.id} name={obj.name} price={obj.price} category={obj.category} img={obj.img} />
})

const ProductList = () => {
   return (
      <div>
         <NavBar />
         <Spacer />
         <HeadingText>All The Clothes — Thoughtfully designed, exceptionally made everything. Welcome to Everyday Luxury.</HeadingText>
         <ProductSection>
            <Filters>
               <Filter>
                  Filter By:
                  <Select>
                     <Option disabled selected>
                        Category
                     </Option>
                     <Option>Bottoms</Option>
                     <Option>Tops</Option>
                     <Option>Dresses</Option>
                     <Option>Bodysuits</Option>
                     <Option>Jackets</Option>
                     <Option>Shoes</Option>
                     <Option>Accessories</Option>
                  </Select>
                  <Select>
                     <Option disabled selected>
                        Size
                     </Option>
                     <Option>XS</Option>
                     <Option>S</Option>
                     <Option>M</Option>
                     <Option>L</Option>
                     <Option>XL</Option>
                     <Option>XXL</Option>
                  </Select>
               </Filter>
               <Filter>
                  Sort By:
                  <Select>
                     <Option selected>Newest</Option>
                     <Option>Price, high to low</Option>
                     <Option>Price, low to high</Option>
                  </Select>
               </Filter>
            </Filters>
            <Products>
               {products}
            </Products>
         </ProductSection>
         <Footer />
      </div>
   )
}

export default ProductList
