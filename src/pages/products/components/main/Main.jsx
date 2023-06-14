import React, { useEffect, useState } from "react";
import ProductItem from "./components/product-item/ProductItem";
import "./style.css";

import products from "../../../../../data/products.json";
import ProductsCategories from "./components/product-categories-selection/ProductsCategories";
import PaginationBar from "./components/pagination-bar/PaginationBar";
import ProductsFilter from "./components/products-filtering/ProductsFilter";
import { Link, useNavigate } from "react-router-dom";

let mappedProducts = [];

export default function Main({ category }) {
  const navigate = useNavigate();

  let [lastCategory, setLastCategory] = useState(category);
  let [currentPage, setCurrentPage] = useState(1);
  let [productsPerPage, setProductsPerPage] = useState(8);
  let [filterProductsType, setFilterProductsType] = useState("");
  let productsArrayInitialized = false;
  let lastIndexProduct;
  let firstIndexProduct;
  let [paginatdMappedProducts, setPaginatdMappedProducts] = useState([]);
  let [pagesNumber, setPagesNumber] = useState(0);
  let [showingProductsNumber, setShowingProductsNumber] = useState(0);

  const initMappedProducts = () => {
    let mp = [];
    switch (category) {
      case undefined:
        mp = products.recommendation[0]["recommendation"];
        break;
      case "mens-watches":
        mp = products.items[2]["mens-watches"];
        break;

      case "womens-watches":
        mp = products.items[3]["womens-watches"];
        break;

      case "mens-shirts":
        mp = products.items[0]["mens-shirts"];
        break;

      case "mens-shoes":
        mp = products.items[1]["mens-shoes"];
        break;

      case "womens-bags":
        mp = products.items[4]["womens-bags"];
        break;

      case "womens-shoes":
        mp = products.items[5]["womens-shoes"];
        break;
      default:
        break;
    }
    mappedProducts = mp;
  };

  const initPaginatedMappedProducts = () => {
    if (lastCategory !== category) lastIndexProduct = productsPerPage;
    else lastIndexProduct = currentPage * productsPerPage;
    firstIndexProduct = lastIndexProduct - productsPerPage;
    let productsPagination = mappedProducts.slice(
      firstIndexProduct,
      lastIndexProduct
    );

    setPaginatdMappedProducts(productsPagination);
    setShowingProductsNumber(mappedProducts.length);
    let pgNumber = Math.ceil(mappedProducts.length / productsPerPage);
    setPagesNumber(pgNumber);
  };

  const filterMappedProducts = () => {
    if (filterProductsType === "ascending") {
      let sortedProducts = mappedProducts.sort((a, b) => {
        let aPrice = parseInt(a.price - (a.price * a.discountPercentage) / 100);
        let bPrice = parseInt(b.price - (b.price * b.discountPercentage) / 100);
        return aPrice > bPrice ? 1 : bPrice > aPrice ? -1 : 0;
      });
      mappedProducts = sortedProducts;
    } else if (filterProductsType === "descending") {
      let sortedProducts = mappedProducts.sort((a, b) => {
        let aPrice = parseInt(a.price - (a.price * a.discountPercentage) / 100);
        let bPrice = parseInt(b.price - (b.price * b.discountPercentage) / 100);
        return aPrice > bPrice ? -1 : bPrice > aPrice ? 1 : 0;
      });
      mappedProducts = sortedProducts;
    }
  };

  const productsInit = () => {
    initMappedProducts();
    if (mappedProducts.length === 0) navigate(-1);
  };

  useEffect(() => {
    productsInit();
    initPaginatedMappedProducts();
    filterMappedProducts();
    console.log("component render");
    setLastCategory(category);
  }, [currentPage, filterProductsType, category]);

  return (
    <>
      <div className="products-main">
        <div className="products-main__categories">
          <ProductsCategories />
        </div>
        <div className="products-main__container">
          <div className="products-main__container__filter">
            <ProductsFilter
              {...{
                setFilterProductsType,
                filterProductsType,
                showingProductsNumber,
              }}
            />
          </div>

          <div className="products-main__container__result">
            {paginatdMappedProducts.length > 0 &&
              paginatdMappedProducts.map((item, index) => (
                <Link
                  to={`/products/${item.category}/${item.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ProductItem key={item.id} {...item} />
                </Link>
              ))}
            <div className="products-main__pagination-bar">
              <PaginationBar
                {...{ setCurrentPage, currentPage, pagesNumber }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
