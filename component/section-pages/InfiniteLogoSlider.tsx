'use client'

import React, { useEffect, useState } from 'react'
import Image, {StaticImageData} from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import image1 from"../../public/img/partenaires/airivoire.jpg";
import image2 from'../../public/img/partenaires/airfrance.jpg';
import image3 from"../../public/img/partenaires/emirates.jpg";
import image4 from'../../public/img/partenaires/ram.jpg';
import image5 from"../../public/img/partenaires/sky.jpg";
import image6 from'../../public/img/partenaires/corsair.jpg';
import image7 from"../../public/img/partenaires/egypteair.jpg";
import image8 from'../../public/img/partenaires/as.jpg';
import image9 from"../../public/img/partenaires/kenya.jpg";
import image10 from'../../public/img/partenaires/senegal.jpg';
import image11 from"../../public/img/partenaires/brussels.jpg";
import image12 from'../../public/img/partenaires/airburkina.jpg';
import image13 from"../../public/img/partenaires/qatar.jpg";
import image14 from'../../public/img/partenaires/tunisair.jpg';
import image15 from"../../public/img/partenaires/algerie.jpg";
import image16 from'../../public/img/partenaires/mauritanie.jpg';

// interface Logo {
//   src: string
//   alt: string
// }

// interface InfiniteLogoSliderProps {
//   logos: Logo[]
//   speed?: number
// }

const InfiniteLogoSlider = () => {
  const [size, setSize] = useState<number>();
  useEffect(() => {
    const sizes = window.innerWidth;
    setSize(sizes)
}, []);
  return (
    <div className="w-full bg-gray-100 py-8">
      <Swiper
      style={{width: size}}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {/* {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={logo} alt={logo.alt} width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image1} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image2} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image3} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image4} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image5} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image6} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image7} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image8} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image9} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image10} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image11} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image12} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image13} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image14} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image15} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-[100px]">
              <Image src={image16} alt="1" width={150} height={75} objectFit="contain" />
            </div>
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default InfiniteLogoSlider

