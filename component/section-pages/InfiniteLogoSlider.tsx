'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from "../../public/img/partenaires/airivoire.jpg";
import image2 from "../../public/img/partenaires/airfrance.jpg";
import image3 from "../../public/img/partenaires/emirates.jpg";
import image4 from "../../public/img/partenaires/ram.jpg";
import image5 from "../../public/img/partenaires/sky.jpg";
import image6 from "../../public/img/partenaires/corsair.jpg";
import image7 from "../../public/img/partenaires/egypteair.jpg";
import image8 from "../../public/img/partenaires/as.jpg";
import image9 from "../../public/img/partenaires/kenya.jpg";
import image10 from "../../public/img/partenaires/senegal.jpg";
import image11 from "../../public/img/partenaires/brussels.jpg";
import image12 from "../../public/img/partenaires/airburkina.jpg";
import image13 from "../../public/img/partenaires/qatar.jpg";
import image14 from "../../public/img/partenaires/tunisair.jpg";
import image15 from "../../public/img/partenaires/algerie.jpg";
import image16 from "../../public/img/partenaires/mauritanie.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image11, image12, image13, image14, image15, image16];

const InfiniteLogoSlider = () => {
  return (
    <div className="container py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="mx-auto"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100px" }}>
              <Image src={img} alt={`logo-${index}`} width={150} height={75} style={{ objectFit: "contain" }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfiniteLogoSlider;
