import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../component/layout/Navbar';
import Preloader from '../component/layout/preloader';
import SwiperComponent from '../component/section-pages/slider';
import Section1 from '../component/section-pages/section-1';
import Section2 from '../component/section-pages/section-2';
import Reviews from '../component/section-pages/CustomerReviews';
import Contact from '../component/section-pages/contact';
import Servers from '../component/section-pages/Server';
import Collection from '../component/section-pages/Collection';
import Help from '../component/section-pages/help';
import Download from '../component/section-pages/Download';
import Payment from '../component/section-pages/Payment';
import Footer from '../component/section-pages/footer';
import ScrollToTopBtn from '../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import HomestaticVideo from '../component/section-pages/homestatic-video';
import Sectioncol from '../component/section-pages/section-3col';
import Location from '../component/section-pages/Location';
import Test from '../component/section-pages/Test';
const image1 ="./img/background/3.webp";
const image2 ="./img/background/2.webp";

const GlobalStyles = createGlobalStyle`
  .navbar-brand .imginit{
      display: block ;
    }
    .navbar-brand .imgsaly{
      display: none !important;
    }
`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>
    <Head>
        <title>KodeGamerz - Le reseau social des gamers africain</title>
        <meta name="title" content="KodeGamerz - Le reseau social des gamers africain"/>
        <meta name="description" content="KODEGAMERZ est une plateforme web / mobile / SMS d’achat de codes de jeux numériques et rechargement streaming,"/>
        <meta name="keywords" content="KODEGAMERZ, codes de jeux, rechargement streaming, VAS, CI, Gaming"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="English"/>
        <meta name="author" content="SMARTDEV"/>
        <link rel="icon" href="./img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home" style={{backgroundColor: "#fff"}}>
      <header id="header-wrap">
         <Navbar />
        </header>
        
        {/* slider */}
      <section id='accueil' className="no-padding">
        <SwiperComponent />
        </section>
        {/* section 4 */}
      <section className="no-bottom">
        <Servers/>
      </section>
        
         {/* section 5 */}
      <Parallax className="" bgImage={image1} strength={300}>  
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <section id='services' className="no-bg">
          <Collection/>
        </section>
        </Parallax>

        

      {/* slider */}
      <section className="no-padding">
      <HomestaticVideo/>
        {/* <SwiperComponent /> */}
        </section>
        
       
        
        

       <section className="no-bottom container">
        <Test/>
      </section>

      {/* section 2 */}
      <section id='contact' className="no-bottom">
        <Section2/>
      </section>

      {/* section 3 */}
      {/* <section className="no-bottom">
        <Reviews/>
      </section> */}

      

      

      {/* section 6
      <section className="no-top no-bottom">
        <Help/>
      </section>

      section 7
      <section className="no-bottom">
        <Download/>
      </section>

      section 8
      <section className="">
        <Payment/>
      </section> */}

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
