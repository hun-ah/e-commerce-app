import styled from "styled-components"
import Navbar from "../components/Navbar"
import Spacer from "../components/Spacer"
import Footer from "../components/Footer"
import ProductCard from "../components/product-list/ProductCard"

const SearchedProducts = ({ searched, setSearched, setFilters }) => {
   console.log(searched)
   return (
      <>
         <Navbar setFilters={setFilters} searched={searched} setSearched={setSearched} />
         <Spacer />
         {Array.isArray(searched) ? searched.map(obj => {
            return <ProductCard key={obj._id} id={obj._id} title={obj.title} price={obj.price} category={obj.category} img={obj.img} size={obj.size} />
         }) : <h1>{searched.msg}</h1>}
         <Footer />
      </>
   )
}

export default SearchedProducts