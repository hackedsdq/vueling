import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../shared-components/footer/Footer";
import Navbar from "../../shared-components/navbar/Navbar";
import Main from "./components/main/Main";

import "./style.css";
export default function Products() {
  let { category } = useParams();

  return (
    <div className="products">
      <Navbar />
      <Main category={category} />
      <Footer />
    </div>
  );
}
