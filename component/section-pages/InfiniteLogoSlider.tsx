'use client'

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchSiteApi, resolveMediaUrl } from '../../lib/site-api';

// Images par défaut en cas d'erreur de chargement de l'API
import image1 from "../../public/img/partenaires/airivoire.jpg";
import image2 from "../../public/img/partenaires/airfrance.jpg";
import image3 from "../../public/img/partenaires/emirates.jpg";
import image4 from "../../public/img/partenaires/ram.jpg";
import image5 from "../../public/img/partenaires/sky.jpg";
import image6 from "../../public/img/partenaires/corsair.jpg";
import image7 from "../../public/img/partenaires/egypteair.jpg";
import image8 from "../../public/img/partenaires/as.jpg";
import image9 from "../../public/img/partenaires/kenya.jpg";
import image11 from "../../public/img/partenaires/brussels.jpg";
import image12 from "../../public/img/partenaires/airburkina.jpg";
import image13 from "../../public/img/partenaires/qatar.jpg";
import image14 from "../../public/img/partenaires/tunisair.jpg";
import image15 from "../../public/img/partenaires/algerie.jpg";
import image16 from "../../public/img/partenaires/mauritanie.jpg";

const defaultLogos = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image11, image12, image13, image14, image15, image16];

interface PartnerLogo {
  id?: string | number;
  name?: string;
  logoUrl?: string | StaticImageData;
  websiteUrl?: string;
  logoOrder?: number;
  isActive?: boolean;
}

const InfiniteLogoSlider = () => {
  const [logos, setLogos] = useState<PartnerLogo[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchLogos = async () => {
      const data = await fetchSiteApi<PartnerLogo[]>(
        '/api/site-admin/partner-logos',
        controller.signal
      );

      if (!Array.isArray(data) || data.length === 0) {
        return;
      }

      const activeLogos = data
        .filter((logo) => logo && logo.isActive !== false)
        .sort((a, b) => (a.logoOrder || 0) - (b.logoOrder || 0));

      if (activeLogos.length > 0) {
        setLogos(activeLogos);
      }
    };

    fetchLogos();

    return () => controller.abort();
  }, []);

  // Utiliser les logos de l'API ou les logos par défaut
  const logosToRender: PartnerLogo[] = logos.length > 0 
    ? logos 
    : defaultLogos.map((img, index) => ({ id: index, logoUrl: img, name: `Logo ${index + 1}` }));

  return (
    <div className="container py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={800}
        autoplay={{ 
          delay: 2000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          480: { slidesPerView: 3, spaceBetween: 15 },
          640: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 25 },
        }}
        className="mx-auto"
      >
        {logosToRender.map((logo, index) => {
          // Gérer les URLs d'images (locales ou API)
          let logoSrc: string | StaticImageData;
          let logoName: string;
          
          // Vérifier si c'est un PartnerLogo (objet avec logoUrl)
          if (logo && typeof logo === 'object' && 'logoUrl' in logo) {
            const logoUrl = logo.logoUrl;
            logoName = logo.name || `logo-${index}`;
            
            // Si logoUrl est une chaîne
            if (typeof logoUrl === 'string') {
              logoSrc = resolveMediaUrl(logoUrl) || logoUrl;
            } 
            // Si logoUrl est un StaticImageData (image importée)
            else if (logoUrl && typeof logoUrl === 'object' && 'src' in logoUrl) {
              logoSrc = logoUrl;
            }
            // Sinon, utiliser la valeur directe ou fallback
            else {
              logoSrc = logoUrl || defaultLogos[0];
            }
          } 
          // Si logo est directement une StaticImageData (image importée)
          else if (logo && typeof logo === 'object' && 'src' in logo && 'height' in logo && 'width' in logo) {
            logoSrc = logo as StaticImageData;
            logoName = `logo-${index}`;
          } 
          // Fallback sur la première image par défaut
          else {
            logoSrc = defaultLogos[0];
            logoName = `logo-${index}`;
          }
          
          return (
            <SwiperSlide key={(logo && typeof logo === 'object' && 'id' in logo ? logo.id : null) || index}>
              <div className="d-flex align-items-center justify-content-center" style={{ height: "100px", cursor: "pointer" }}>
                <Image 
                  src={logoSrc} 
                  alt={logoName} 
                  width={150} 
                  height={75} 
                  className="logo-slide"
                  style={{ objectFit: "contain", transition: "all 0.3s ease" }}
                  unoptimized={true}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default InfiniteLogoSlider;