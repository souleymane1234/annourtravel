import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay, A11y, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import {isMobile} from 'react-device-detect';

const image1 ="../../img/slider/KODEGAMERZ_BANNER4_VAS.jpg";
const image2 ="../../img/slider/6.webp";
const image3 ="../../img/slider/KODEGAMERZ_BANNER3_TOURNOIS.jpg";
const image4 ="../../img/slider/KODEGAMERZ_BANNER2_LIVE_STEAMING.jpg";
const image5 ="../../img/slider/BG_GIFTS_CARD.jpg";
const image6 ="../../img/slider/10.jpeg";

const YourComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  console.log(isMobile, 'isMobile')
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
                                                backgroundImage: `url(${image1})`,
                                                width: '100%',
                                                height: '100%',
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">Univers VAS</div>
                              <h1 className="slider-title text-uppercase mb-1">Reste branché et gagne de nombreux lots facilement</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Reçois les informations sur l'univers du gaming, des bons plans, participes au quiz et gagne des lots facilement</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Souscris par ici</Link>
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
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">LA BOUTIQUE</div>
                              <h1 className="slider-title text-uppercase mb-1">Achète tes contenus de jeux, consoles et codes streaming</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Achète des codes de contenu de jeux, de contenu de streaming audio & video, mais aussi des console dans notre boutique officiel</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Achète par ici</Link>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="sw-overlay"></div>
          </div>         
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image3})`,
                                                width: '100%',
                                                height: '100%',
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">Tournois en cours</div>
                              <h1 className="slider-title text-uppercase mb-1">Hisse toi au sommet de l&apos;arènne et gagne de nombreux lots</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Participe par ici</Link>
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
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">Téléréalité</div>
                            <h1 className="slider-title text-uppercase mb-1">Notre univers de téléréalité vous met en lumière</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="#">Participe par ici</Link>
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
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">Votes gamers</div>
                              <h1 className="slider-title text-uppercase mb-1">Rejoins la communauté et vote pour tes gamers</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Vote par ici</Link>
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
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center text-center">
                          <div className="col-lg-8 mb-sm-30 mx-auto">
                              <div className="subtitle blink mb-4">Live streaming</div>
                              <h1 className="slider-title text-uppercase mb-1">Suit les aventures épiques sans manquer une miète</h1>
                          </div>
                          <div className="col-lg-6 mx-auto">
                              {/* <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p> */}
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Regarde par ici</Link>
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
                                              backgroundImage: `url(${image1})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +3K LOTS
              </span>
              <h3>Univers VAS</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image5})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +200 ARTICLES
              </span>
              <h3>La Boutique</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image3})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +21 CHALLENGES
              </span>
              <h3>Tournois</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image6})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +4 ÉMISSIONS
              </span>
              <h3>Téléréalité</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image2})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +2K GAMERS
              </span>
              <h3>Votes gamers</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image4})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  +15 LIVES
              </span>
              <h3>Streaming & TV</h3>
          </div>
        </SwiperSlide>
        {/* Add more thumbnail slides here */}
      </Swiper>
    </div>
  );
};

export default YourComponent;
