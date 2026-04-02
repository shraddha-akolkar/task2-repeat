import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";
import ArrowIcon from "../../../assets/svg/ArrowIcon";

const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hero-container">
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="slide">
            <img src="/images/slider.jpg" alt="slide1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/contact.png" alt="slide2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src="/images/realty.png" alt="slide3" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Arrows */}
      <div className="custom-prev" ref={prevRef}>
        <ArrowIcon />
      </div>

      <div className="custom-next" ref={nextRef}>
        <ArrowIcon />
      </div>
    </div>
  );
};

export default Slider;
