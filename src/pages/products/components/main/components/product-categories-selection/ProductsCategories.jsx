import React from "react";
import "./style.css";
import categories from "../../../../../../../data/products.json";
import ProductsCategory from "./components/product-category/ProductsCategory";

export default function ProductCategories() {
  return (
    <div className="products-categories">
      <h3>Product Categories</h3>
      {categories.categories.map((item, index) => (
        <ProductsCategory key={index} {...item} />
      ))}
    </div>
  );
}
