import { StrictMode } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {

  return (
   <StrictMode>
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Products/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/products/:productId" element= {<ProductDetails/>}/>
    <Route path="*" element = {<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  </StrictMode>
  )
}

export default App
