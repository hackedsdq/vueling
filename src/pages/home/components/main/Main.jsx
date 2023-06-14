import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../../../App";
import Description from "./components/description/Description";
import ProductSlider from "./components/products-slider/ProductSlider";
import Reviews from "./components/reviews/Reviews";
import "./style.css";

export default function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="home-main">
      <Description />
      <ProductSlider />
      <Reviews />
    </div>
  );
}
