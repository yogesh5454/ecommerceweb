import "./App.css";

import Nav from "./navbar/nav";
import Clothing from "./Clothing/Clothing";
import Cart from "./cart/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grocery from "./Grocery/grocery";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Cart /> 
        <Routes>
     
        <Route path="/" element={<Clothing />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/grocery" element={<Grocery />} />
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;
