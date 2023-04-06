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
`

const ProductSection = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;

   @media screen and (min-width: 1500px){
      width: 1500px;
   }
`

const HeadingText = styled.h1`
   font-family: 'Poppins', sans-serif;
   width: 60%;
   padding: 104px 20px 48px 20px;
   font-size: 24px;
   line-height: 36px;
   color: #2D2B2B;

   @media screen and (max-width: 900px){
      width: 100%;
   }
`
const Filters = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 30px;
   padding: 4px;
   margin: 20px;
`

const Filter = styled.div`
   font-family: 'Poppins', sans-serif;
   display: flex;
   align-items: center;
   gap: 16px;
   font-size: 12px;
   line-height: 18px;
   color: #2D2B2B;

   @media screen and (max-width: 500px){
      gap: 8px;
   }
`

const Select = styled.select`
   font-family: 'Poppins', sans-serif;
   font-size: 12px;
   color: #2D2B2B;
   padding: 8px 16px;
   background: #F9F9F9;
   border: 1px solid #2D2B2B;
   cursor: pointer;

   @media screen and (max-width: 499px){
      padding: 8px 4px;
   }
`

const Option = styled.option`
   
`

const Products = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   row-gap: 40px;
   column-gap: 16px;
   padding: 20px 20px;
   width: 100%;
   margin-bottom: calc(104px - 20px);
`

const NoMatch = styled.span`
   font-family: 'Poppins', sans-serif;
   margin-top: 20px;
`

const ProductList = ({ filters, setFilters, searched, setSearched }) => {
   const location = useLocation()
   const category = location.pathname.split('/')[2]
   const [sortBy, setSortedBy] = useState('newest')
   const [products, setProducts] = useState([])
   const [filteredProducts, setFilteredProducts] = useState([])

   const [loading, setLoading] = useState(true)

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
            setLoading(false)
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
            return [...prevProd].sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
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

   return (
      <>
         <NavBar setFilters={setFilters} searched={searched} setSearched={setSearched} />
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
                        <Option>white</Option>
                        <Option>nude</Option>
                        <Option>brown</Option>
                        <Option>blue</Option>
                        <Option>maroon</Option>
                        <Option>pink</Option>
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
                  {loading ? (
                     <span></span>
                  ) : (
                     filteredProducts.length >= 1 ? (
                        filteredProducts.map(obj => {
                           return <ProductCard key={obj._id} id={obj._id} title={obj.title} price={obj.price} category={obj.category} img={obj.img} size={obj.size} />
                        })
                     ) : (
                        <NoMatch>Sorry, no products currently match that filter</NoMatch>
                     )
                  )}
               </Products>
            </ProductSection>
         </Container>
         <Footer />
      </>
   )
}

export default ProductList
