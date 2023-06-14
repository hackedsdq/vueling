import React from "react";
import Footer from "../../shared-components/footer/Footer";
import Navbar from "../../shared-components/navbar/Navbar";
import Main from "./main/Main";
import "./style.css";

export default function ProductDetails() {
  return (
    <div className="product-details">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
