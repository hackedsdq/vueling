import React from "react";
import "./style.css";
export default function ProductsFilter({
  setFilterProductsType,
  filterProductsType,
  showingProductsNumber,
}) {
  return (
    <div className="products-filter">
      <p className="products-filter__results">
        {showingProductsNumber} products showing on
      </p>
      <form id="app-cover">
        <div id="select-box">
          <input type="checkbox" id="options-view-button" />
          <div id="select-button" className="brd">
            <div id="selected-value">
              <span>Select a price filter</span>
            </div>
            <div id="chevrons">
              <i className="fas fa-chevron-up" />
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div id="options">
            <div
              onClick={() => setFilterProductsType("ascending")}
              className="option"
            >
              <input
                className="s-c top"
                type="radio"
                name="platform"
                defaultValue="codepen"
              />
              <input
                className="s-c bottom"
                type="radio"
                name="platform"
                defaultValue="codepen"
              />
              <i className="fab fa-codepen" />
              <span className="label">Ascending</span>
              <span className="opt-val">Ascending</span>
            </div>
            <div
              onClick={() => setFilterProductsType("descending")}
              className="option"
            >
              <input
                className="s-c top"
                type="radio"
                name="platform"
                defaultValue="dribbble"
              />
              <input
                className="s-c bottom"
                type="radio"
                name="platform"
                defaultValue="dribbble"
              />
              <i className="fab fa-dribbble" />
              <span className="label">Descending</span>
              <span className="opt-val">Descending</span>
            </div>

            <div id="option-bg" />
          </div>
        </div>
      </form>
    </div>
  );
}
