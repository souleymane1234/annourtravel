import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay, A11y, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {isMobile} from 'react-device-detect';

const image1 ="../../img/slider/slide1.jpg";
const image2 ="../../img/slider/slide2.jpg";
const image3 ="../../img/slider/slide3.jpg";
const image4 ="../../img/slider/slide4.jpg";
const image5 ="../../img/slider/slide5.jpg";
const image6 ="../../img/slider/slide6.jpg";

const YourComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
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
                <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image3})`,
                                                width: '100%',
                                                height: '100%',
                                                // backgroundPosition: "center",
                                                // backgroundRepeat: "no-repeat",
                                                // backgroundSize: "cover"
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          {/* <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">Tournois en cours</div>
                              <h1 className="slider-title text-uppercase mb-1">Hisse toi au sommet de l&apos;arènne et gagne de nombreux lots</h1>
                          </div> */}
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Contactez nous</Link>
                          </div>
                      </div>
                  </div>
              </div>                                
              <div className="sw-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image1})`,
                                                width: '100%',
                                                height: '100%',
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">DUBAI</div>
                              <h1 className="slider-title text-uppercase mb-1">Voyager simplement</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Reçois les informations sur l'univers du gaming, des bons plans, participes au quiz et gagne des lots facilement</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Contactez nous</Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="sw-overlay"></div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image5})`,
                                                width: '100%',
                                                height: '100%',
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">FRANCE</div>
                              <h1 className="slider-title text-uppercase mb-1">Voyager simplement</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Achète des codes de contenu de jeux, de contenu de streaming audio & video, mais aussi des console dans notre boutique officiel</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Contactez nous</Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="sw-overlay"></div>
          </div>         
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image2})`,
                                                width: '100%',
                                                height: '100%',
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                                // backgroundPosition: "center",
                                                // background-repeat: no-repeat,
                                                // background-size: cover,

                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">CANADA</div>
                              <h1 className="slider-title text-uppercase mb-1">Voyager simplement</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Contactez nous</Link>
                          </div>
                      </div>
                  </div>
              </div>                                
              <div className="sw-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image4})`,
                                                width: '100%',
                                                height: '100%',
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">CHINE</div>
                              <h1 className="slider-title text-uppercase mb-1">Voyager simplement</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Contactez nous</Link>
                          </div>
                      </div>
                  </div>
              </div>                                
              <div className="sw-overlay"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image6})`,
                                              width: '100%',
                                              height: '100%',
                                              backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover"
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">IATA</div>
                            <h1 className="slider-title text-uppercase mb-1">Nous sommes certifié IATA</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Contactez nous</Link>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
          </div>
        </SwiperSlide>
      {/* Add more slides here */}
    </Swiper>
    <Swiper
        direction={isMobile ? 'horizontal':'vertical'}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        freeMode={true}
        spaceBetween={10}
        slidesPerView={3}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-slider"
      >
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image3})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +3K LOTS
              </span> */}
              <h3>NOS SERVICES</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image1})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +200 ARTICLES
              </span> */}
              <h3>DUBAI</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image5})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +21 CHALLENGES
              </span> */}
              <h3>FRANCE</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image2})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +4 ÉMISSIONS
              </span> */}
              <h3>CANADA</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image4})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +2K GAMERS
              </span> */}
              <h3>CHINE</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image6})`,
                                            }}>
          <div className="sw-caption-thumb">
              {/* <span className="d-tag">
                  +15 LIVES
              </span> */}
              <h3>IATA</h3>
          </div>
        </SwiperSlide>
        {/* Add more thumbnail slides here */}
      </Swiper>
    </div>
  );
};

export default YourComponent;
