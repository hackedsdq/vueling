import React from "react";
import "./style.css";
import Image1 from "../../../../../../assets/images/shoes.jpg";

export default function ProductItem({
  id,
  title,
  price,
  discountPercentage,
  brand,
  category,
  thumbnail,
}) {
  let priceAfterDiscount = parseInt(price - (price * discountPercentage) / 100);
  let priceBeforeDiscount = parseInt(price);
  return (
    <div key={id} className="product">
      <div className="product__image-container">
        <div
          className="product__image-container__img"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      </div>

      <div className="product__description-container">
        <p>{brand}</p>
        <h2>{title}</h2>
        <div className="product__description-container__price">
          <h4>{priceAfterDiscount}$</h4>
          <h4>{priceBeforeDiscount}$</h4>
        </div>
      </div>
    </div>
  );
}
