import Home from "./pages/home/Home";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/product-details/ProductDetails";

export const ThemeContext = createContext(null);

function App() {
  let [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":category" element={<Products />} />
          <Route path=":category/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<></>} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
