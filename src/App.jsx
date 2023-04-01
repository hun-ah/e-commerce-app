import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import OurStory from "./pages/OurStory";
import ShoppingBag from "./pages/ShoppingBag";
import NotFound from "./pages/NotFound"
import PaymentSuccess from "./pages/PaymentSuccess"
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'

function App() {
  const [quantity, setQuantity] = useState(1)
  const [filters, setFilters] = useState({})
  const [stripeToken, setStripeToken] = useState(null)
  // used for comparing against stripeToken when going back to checkout page
  const [tokenForCompare, setTokenForCompare] = useState(null)

  return (
    <Routes>
      <Route path="/" element={<Homepage setFilters={setFilters} />} />
      <Route path="/productList/:category" element={<ProductList filters={filters} setFilters={setFilters} />} />
      <Route path="/ourStory" element={<OurStory setFilters={setFilters} />} />
      <Route path="/shoppingBag" element={<ShoppingBag setFilters={setFilters} quantity={quantity} setQuantity={setQuantity} stripeToken={stripeToken} setStripeToken={setStripeToken} tokenForCompare={tokenForCompare} setTokenForCompare={setTokenForCompare} />} />
      <Route path="/product/:id" element={<Product setFilters={setFilters} quantity={quantity} />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/success" element={<PaymentSuccess stripeToken={stripeToken} setStripeToken={setStripeToken} setTokenForCompare={setTokenForCompare} setFilters={setFilters} />} />
    </Routes>
  );
}

export default App;
