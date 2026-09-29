import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay, A11y, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {isMobile} from 'react-device-detect';
import { fetchSiteApi, resolveMediaUrl } from '../../lib/site-api';

// Images par défaut en cas d'erreur de chargement de l'API
const defaultImages = {
  image1: "../../img/slider/slide1.jpg",
  image2: "../../img/slider/slide2.jpg",
  image3: "../../img/slider/slide3.jpg",
  image4: "../../img/slider/slide4.jpg",
  image5: "../../img/slider/slide5.jpg",
  image6: "../../img/slider/slide6.jpg",
  image7: "../../img/slider/slide7.jpeg",
  image8: "../../img/slider/slide8.jpeg",
  image9: "../../img/slider/slide9.jpeg",
  image10: "../../img/slider/slide10.jpeg",
  image11: "../../img/slider/slide11.jpeg",
  image12: "../../img/slider/slide12.jpeg",
  image13: "../../img/slider/slide13.jpeg",
  image14: "../../img/slider/slide14.jpeg"
};

const YourComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSlides = async () => {
      const data = await fetchSiteApi('/api/slides', controller.signal);
      if (!Array.isArray(data) || data.length === 0) {
        return;
      }

      const activeSlides = data
        .filter(slide => slide && (slide.isActive !== false))
        .sort((a, b) => (a.slideOrder || 0) - (b.slideOrder || 0));

      if (activeSlides.length > 0) {
        setSlides(activeSlides);
      }
    };

    fetchSlides();

    return () => controller.abort();
  }, []);

  // Si les slides sont en cours de chargement ou s'il n'y en a pas, utiliser les slides par défaut
  const slidesToRender = slides.length > 0 ? slides : [
    { id: 2, imageUrl: defaultImages.image1, thumbnailUrl: defaultImages.image1, subtitle: "DUBAI", title: "Voyager simplement", description: "" },
    { id: 3, imageUrl: defaultImages.image5, thumbnailUrl: defaultImages.image5, subtitle: "FRANCE", title: "Voyager simplement", description: "" },
    { id: 4, imageUrl: defaultImages.image2, thumbnailUrl: defaultImages.image2, subtitle: "CANADA", title: "Voyager simplement", description: "" },
    { id: 5, imageUrl: defaultImages.image4, thumbnailUrl: defaultImages.image4, subtitle: "CHINE", title: "Voyager simplement", description: "" },
    { id: 6, imageUrl: defaultImages.image6, thumbnailUrl: defaultImages.image6, subtitle: "IATA", title: "Nous sommes certifié IATA", description: "" },
    { id: 7, imageUrl: defaultImages.image7, thumbnailUrl: defaultImages.image7, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 8, imageUrl: defaultImages.image8, thumbnailUrl: defaultImages.image8, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 9, imageUrl: defaultImages.image9, thumbnailUrl: defaultImages.image9, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 10, imageUrl: defaultImages.image10, thumbnailUrl: defaultImages.image10, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 11, imageUrl: defaultImages.image11, thumbnailUrl: defaultImages.image11, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 12, imageUrl: defaultImages.image12, thumbnailUrl: defaultImages.image12, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 13, imageUrl: defaultImages.image13, thumbnailUrl: defaultImages.image13, subtitle: "", title: "", description: "", thumbnailTitle: "" },
    { id: 14, imageUrl: defaultImages.image14, thumbnailUrl: defaultImages.image14, subtitle: "", title: "", description: "", thumbnailTitle: "" },
  ];

  return (
    <div className="doubleslider">
    <Swiper
      className="mainslider"
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
        navigation={!isMobile}
        parallax
        
      pagination={{ clickable: true, }}
      autoplay={{ delay: 3000 }}
    >
      {slidesToRender.map((slide, index) => {
        // Construire l'URL complète pour les images de l'API
        const imageUrl = typeof slide.imageUrl === 'string'
          ? (resolveMediaUrl(slide.imageUrl) || slide.imageUrl)
          : slide.imageUrl;
        const thumbnailUrl = typeof slide.thumbnailUrl === 'string'
          ? (resolveMediaUrl(slide.thumbnailUrl) || slide.thumbnailUrl)
          : (slide.thumbnailUrl || imageUrl);

        return (
        <SwiperSlide key={slide.id || index}>
          <div className="swiper-inner" style={{
            backgroundImage: `url(${imageUrl})`,
                                                width: '100%',
                                                height: '100%',
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                  {slide.subtitle && slide.title && (
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                      {slide.subtitle && <div className="subtitle blink mb-4">{slide.subtitle}</div>}
                      {slide.title && <h1 className="slider-title text-uppercase mb-1">{slide.title}</h1>}
                          </div>
                  )}
                          <div className="col-lg-6 mx-auto">
                    {slide.description && <p className="slider-text">{slide.description}</p>}
                              <div className="spacer-10"></div>
                    <Link className="btn-main mb10" href={slide.buttonLink || "#contact"}>
                      {slide.buttonText || "Contactez nous"}
                    </Link>
                          </div>
                      </div>
                  </div>
              </div>
            <div className="sw-overlay"></div>
          </div> 
        </SwiperSlide>
        );
      })}
    </Swiper>
    <Swiper
      direction={isMobile ? 'horizontal' : 'vertical'}
      onSwiper={setThumbsSwiper}
      watchSlidesProgress
      freeMode={true}
      spaceBetween={10}
      slidesPerView={3}
      modules={[FreeMode, Navigation, Thumbs]}
      className="thumb-slider"
    >
      {slidesToRender.map((slide, index) => {
        // Construire l'URL complète pour les thumbnails
        const thumbUrl = slide.thumbnailUrl || slide.imageUrl;
        const finalThumbUrl = typeof thumbUrl === 'string'
          ? (resolveMediaUrl(thumbUrl) || thumbUrl)
          : thumbUrl;

        return (
        <SwiperSlide key={`thumb-${slide.id || index}`} className="swiper-slide" style={{
          backgroundImage: `url(${finalThumbUrl})`,
        }}>
          <div className="sw-caption-thumb">
            <h3>{slide.thumbnailTitle || slide.subtitle || slide.title || `Slide ${index + 1}`}</h3>
          </div>
        </SwiperSlide>
        );
      })}
      </Swiper>
    </div>
  );
};

export default YourComponent;
