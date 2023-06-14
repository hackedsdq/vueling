import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import MainImage from "../../../assets/images/shoes.jpg";
import { useParams } from "react-router-dom";

import products from "../../../../data/products.json";

let slidesCount = 0;
export default function Main() {
  let { id, category } = useParams();

  const navigate = useNavigate();

  let categoryProducts = products.items.filter(
    (item, index) => item[category]
  )[0][category];

  let [product, setProduct] = useState(undefined);
  let [mainProductImage, setMainProductImage] = useState("");

  const listSlidesRef = useRef(null);
  const slideRef = useRef(null);

  const slidesUp = useCallback(() => {
    let slides = Array.from(listSlidesRef.current.children);
    let slideHeight = slides[0].getBoundingClientRect().height;
    let slidesLength = slides.length;
    if (slidesCount > 0) {
      slidesCount--;
      listSlidesRef.current.style.transform = `translateY(-${
        slidesCount * slideHeight
      }px)`;
      listSlidesRef.current.style.transition = "ease 1s";
      console.log(slidesCount * slideHeight);
    }
  });

  const slidesDown = useCallback(() => {
    let slides = Array.from(listSlidesRef.current.children);
    let slideHeight = slides[0].getBoundingClientRect().height;
    let slidesLength = slides.length;

    if (slidesCount < slidesLength - 3) {
      slidesCount++;

      listSlidesRef.current.style.transform = `translateY(-${
        slidesCount * slideHeight
      }px)`;

      listSlidesRef.current.style.transition = "ease 1s";

      console.log(slidesCount * slideHeight);
    }
  });

  const changeMainProductImage = useCallback((newMainProductImage) => {
    setMainProductImage(newMainProductImage);
  });

  useEffect(() => {
    let item = categoryProducts.filter(
      (item, index) => item.id === parseInt(id)
    );

    if (item.length > 0) {
      setProduct(item);
      setMainProductImage(item[0]?.thumbnail);
    } else navigate(-1);
  }, []);

  return (
    <>
      {product !== undefined && (
        <div className="product-details-main">
          <div className="product-details-main__container">
            <div className="product-details-main__container__images">
              <div className="product-details-main__container__images__list__container">
                <i
                  onClick={() => slidesUp()}
                  class="fa-solid fa-chevron-up"
                ></i>

                <div
                  ref={listSlidesRef}
                  className="product-details-main__container__images__list"
                >
                  {product[0]?.images.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => changeMainProductImage(item)}
                      style={{ backgroundImage: `url(${item})` }}
                      className="product-details-main__container__images__list__slide"
                    ></div>
                  ))}
                </div>

                <i
                  onClick={() => slidesDown()}
                  class="fa-solid fa-chevron-down"
                ></i>
              </div>

              <div
                className="product-details-main__container__images__main-image"
                style={{
                  backgroundImage: `url(${mainProductImage})`,
                }}
              ></div>
            </div>
            <div className="product-details-main__container__description">
              <div className="product-details-main__container__description__title">
                <h4>
                  {product[0].title} ({product[0].category})
                </h4>
                <p>{product[0].brand}</p>
              </div>

              <div className="line"></div>
              <div className="product-details-main__container__description__price">
                <h4>
                  $
                  {parseInt(
                    product[0].price -
                      (product[0].price * product[0].discountPercentage) / 100
                  )}
                </h4>
                <h4>${product[0].price}</h4>
              </div>
              <div className="line"></div>
              <div className="product-details-main__container__description__text">
                <h4>Description</h4>
                <p>{product[0].description}</p>
                <h5>stock : {product[0].stock}</h5>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
