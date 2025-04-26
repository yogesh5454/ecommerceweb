import "./App.css";

import Nav from "./navbar/nav";
import Head from "./Clothing/Heading/head";
import Output from "./Clothing/products/output";
import Cart from "./cart/cart";
function App() {
  return (
    <>
      <Nav />
      <Cart/>
      <Head />
      <Output/>
    </>
  );
}

export default App;
