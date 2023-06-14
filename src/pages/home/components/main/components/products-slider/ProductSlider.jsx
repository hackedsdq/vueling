import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";

import image1 from "../../../../../../assets/images/shoes.jpg";
import image2 from "../../../../../../assets/images/kids_shirts.jpg";
import image3 from "../../../../../../assets/images/watch.jpg";

export default function ProductSlider() {
  return (
    <div className="slider">
      <div className="slider_title">
        <h1 className="slider_title1">Our Product</h1>

        <div className="slider_title2container">
          <h1 className="slider_title2"> Collections</h1>
          <div className="slider_title-line"></div>
        </div>
      </div>

      <div className="carousel">
        <Swiper
          effect={"flip"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={image1} />
            <h1 className="swiper_slide-text">shoes</h1>
            <div className="swiper-slide-line"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} />
            <h1 className="swiper_slide-text">baby clothes</h1>
            <div className="swiper-slide-line"></div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} />
            <h1 className="swiper_slide-text">watches</h1>
            <div className="swiper-slide-line"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
