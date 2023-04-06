import styled from "styled-components"
import Navbar from "../components/Navbar"
import Spacer from "../components/Spacer"
import Footer from "../components/Footer"
import ProductCard from "../components/product-list/ProductCard"
import CategorySlider from "../components/homepage/CategorySlider"
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Container = styled.div`
   width: 100%;
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   color: #2d2b2b;
   font-family: 'Poppins', sans-serif;
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

const Products = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   row-gap: 40px;
   column-gap: 16px;
   padding: 20px 20px;
   width: 100%;
   margin-top: 104px;
`

const Results = styled.div`
   position: absolute;
   top: 50px;
   left: 20px;
   font-size: 24px;
   line-height: 36px;
`

const NoResults = styled.div`
   display: flex;
   gap: 14px;
   width: 100%;
`

const SearchMsg = styled.h1`
   font-size: 24px;
   line-height: 36px;
   flex: 1;
`

const SearchedProducts = ({ searched, setSearched, setFilters }) => {
   const searchedProduct = useSelector(state => state.search)
   console.log(searchedProduct)
   return (
      <>
         <Navbar setFilters={setFilters} searched={searched} setSearched={setSearched} />
         <Spacer />
         <Container>
            <ProductSection>
               {Array.isArray(searched) ?
                  <div style={{ position: 'relative', marginTop: '50px', marginBottom: '80px' }}>
                     <Results>{`Showing results for "${searchedProduct.search}"`}</Results>
                     <Products>
                        {searched.map(obj => {
                           return <ProductCard key={obj._id} id={obj._id} title={obj.title} price={obj.price} category={obj.category} img={obj.img} size={obj.size} />
                        })}
                     </Products>
                  </div> :
                  <Products>
                     <NoResults>
                        <AiOutlineSearch style={{ height: '25px', width: '25px', marginTop: '5px' }} />
                        < SearchMsg >
                           {`${searched.msg} "${searchedProduct.search}"`}
                        </SearchMsg>
                     </NoResults>
                  </Products>
               }
            </ProductSection>
            {!Array.isArray(searched) && <CategorySlider setFilters={setFilters} />}
         </Container >
         <Footer />
      </>
   )
}

export default SearchedProducts