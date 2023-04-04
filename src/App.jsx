import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import OurStory from "./pages/OurStory";
import ShoppingBag from "./pages/ShoppingBag";
import NotFound from "./pages/NotFound"
import PaymentSuccess from "./pages/PaymentSuccess"
import SearchedProducts from "./pages/SearchedProducts";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [quantity, setQuantity] = useState(1)
  const [filters, setFilters] = useState({})
  const [stripeToken, setStripeToken] = useState(null)
  const [searched, setSearched] = useState([])
  // used for comparing against stripeToken when going back to checkout page
  const [tokenForCompare, setTokenForCompare] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<Homepage
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/productList/:category" element={<ProductList
        filters={filters}
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/ourStory" element={<OurStory
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/shoppingBag" element={<ShoppingBag
        setFilters={setFilters}
        quantity={quantity}
        setQuantity={setQuantity}
        stripeToken={stripeToken}
        setStripeToken={setStripeToken}
        tokenForCompare={tokenForCompare}
        setTokenForCompare={setTokenForCompare}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/product/:id" element={<Product
        setFilters={setFilters}
        quantity={quantity}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/search" element={<SearchedProducts
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="*" element={<NotFound
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
      <Route path="/success" element={<PaymentSuccess
        stripeToken={stripeToken}
        setStripeToken={setStripeToken}
        setTokenForCompare={setTokenForCompare}
        setFilters={setFilters}
        searched={searched}
        setSearched={setSearched} />}
      />
    </Routes>
  );
}

export default App;
