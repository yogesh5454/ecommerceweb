

import Nav from "./navbar/nav";
import Clothing from "./Clothing/Clothing";
import Cart from "./cart/cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grocery from "./Grocery/Grocery"
import Bakery from "./Bakery/Bakery";
import Furniture from "./Furniture/Furniture";
import Dailyneeds from "./Dailyneeds/Dailyneeds";
import Books from "./Books/Books";
import Gadget from "./Gadget/Gadget";
import Medicine from "./Medicine/Medicine";
import Bags from "./Bags/Bags";
import Makeup from "./Makeup/Makeup";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <Nav />
      <Cart />
      <Routes>
        <Route path="/" element={<Clothing />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/furniture" element={<Furniture />} />
<Route path="/dailyneeds/*" element={<Dailyneeds />} />
        <Route path="/books" element={<Books />} />
        <Route path="/gadget" element={<Gadget />} />
        <Route path="/medicine" element={<Medicine />} />
        
      </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
