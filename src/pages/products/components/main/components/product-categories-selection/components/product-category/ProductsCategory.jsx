import React from "react";
import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function ProductCategory({ title, types }) {
  let [containerCategoryState, setcontainerCategoryState] = useState(true);

  return (
    <div className="products-category">
      <div className="products-category__selection-container">
        <h4 className="products-category__selection-container__title">
          {title}
        </h4>
        <div
          onClick={() => setcontainerCategoryState(!containerCategoryState)}
          className="products-category__selection-container__arrow"
        >
          <i className="fas fa-chevron-right" style={{ height: "2px" }} />
        </div>
      </div>
      <div
        className="products-category__list-container"
        style={{ display: containerCategoryState ? "unset" : "none" }}
      >
        <ul className="products-category__list-container__items">
          {types.map((item, index) => (
            <li key={index} className="products-category__list-container__item">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/products/${item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
