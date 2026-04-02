import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";

import "./Gallery.css";
import galleryMain from "../../../assets/images/gallerymain.jpg";
import gallery1 from "../../../assets/images/gallery1.png";
import gallery3 from "../../../assets/images/gallery3.png";

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [galleryMain, gallery1, gallery3];

  return (
    <div className="Gallery-wrapper">
      <Swiper
        modules={[Thumbs, Autoplay]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        speed={900}
        className="main-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Gallery slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={3}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        loop={true}
        className="thumb-swiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Gallery thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
