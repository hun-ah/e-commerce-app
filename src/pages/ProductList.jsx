import styled from "styled-components"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/product-list/ProductCard'
import Spacer from "../components/Spacer"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   justify-content: center;
`

const ProductSection = styled.section`
   display: flex;
   flex-direction: column;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
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
   padding: 0 10px 0 20px ;
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
   justify-content: space-between;
   padding: 20px 20px;
   width: 100%;
`

const ProductList = ({ filters, setFilters }) => {
   const location = useLocation()
   const category = location.pathname.split('/')[2]
   const [sortBy, setSortedBy] = useState('newest')
   const [products, setProducts] = useState([])
   const [filteredProducts, setFilteredProducts] = useState([])

   console.log(filteredProducts)
   console.log(filters)

   const handleFilters = (e) => {
      const { value, name } = e.target
      setFilters({
         ...filters,
         [name]: value
      })
   }

   useEffect(() => {
      const getProducts = async () => {
         try {
            const res = await fetch(category === 'all' ? `http://localhost:5000/api/product/findAll` : `http://localhost:5000/api/product/findAll?category=${category}`)
            const data = await res.json()
            setProducts(data)
         } catch (err) {
            console.log(err)
         }
      }
      getProducts()
   }, [category])

   useEffect(() => {
      category &&
         setFilteredProducts(
            products.filter((item) =>
               Object.entries(filters).every(([key, value]) =>
                  item[key].includes(value)
               )
            )
         )
   }, [products, category, filters])

   useEffect(() => {
      if (sortBy === 'newest') {
         setFilteredProducts(prevProd => {
            return [...prevProd].sort((a, b) => a.createdAt - b.createdAt)
         })
      } else if (sortBy === 'high') {
         setFilteredProducts(prevProd => {
            return [...prevProd].sort((a, b) => b.price - a.price)
         })
      } else {
         setFilteredProducts(prevProd => {
            return [...prevProd].sort((a, b) => a.price - b.price)
         })
      }
   }, [sortBy]);

   const productsList = filteredProducts.map(obj => {
      return <ProductCard key={obj._id} name={obj.title} price={obj.price} category={obj.category} img={obj.img} />
   })

   return (
      <>
         <NavBar setFilters={setFilters} />
         <Spacer />
         <Container>
            <ProductSection>
               <HeadingText>All The Clothes — Thoughtfully designed, exceptionally made everything. Welcome to Everyday Luxury.</HeadingText>
               <Filters>
                  <Filter>
                     Filter By:
                     <Select name="color" defaultValue="Color" onChange={handleFilters}>
                        <Option value="Color" disabled>
                           Color
                        </Option>
                        <Option>blue</Option>
                        <Option>white</Option>
                        <Option>maroon</Option>
                        <Option>nude</Option>
                        <Option>yellow</Option>
                     </Select>
                  </Filter>
                  <Filter>
                     Sort By:
                     <Select onChange={(e) => setSortedBy(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="high">Price, high to low</Option>
                        <Option value="low">Price, low to high</Option>
                     </Select>
                  </Filter>
               </Filters>
               <Products>
                  {productsList}
               </Products>
            </ProductSection>
         </Container>
         <Footer />
      </>
   )
}

export default ProductList
