import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import OurStory from "./pages/OurStory";
import ShoppingBag from "./pages/ShoppingBag";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'

function App() {
  const [filters, setFilters] = useState({})

  return (
    <Routes>
      <Route path="/" element={<Homepage setFilters={setFilters} />} />
      <Route path="/productList/:category" element={<ProductList filters={filters} setFilters={setFilters} />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/shoppingBag" element={<ShoppingBag />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default App;
