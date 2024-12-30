import React from 'react';
import Link from 'next/link'; 
import { Parallax } from "react-parallax";
import Image from 'next/image';

import image1 from '../../public/img/slider/billet.jpg';
import ituneCard from '../../public/img/covers/itune_card.webp';
import xboxCard from '../../public/img/covers/xbox_card.jpg';
import amazonCard from '../../public/img/covers/amazon_card.avif';
import psCard from '../../public/img/covers/ps_card.png';
import rpmCard from '../../public/img/covers/rpm_card.webp';
import image2 from '../../public/img/slider/visa.jpg';
import image3 from '../../public/img/slider/reservation.jpg';
import image4 from '../../public/img/slider/assurance.jpg';
import image5 from '../../public/img/slider/attestation.jpg';
import image6 from '../../public/img/covers/fifa24.jpg';
import image7 from '../../public/img/covers/7.webp';
import image8 from '../../public/img/covers/8.webp';

const images = [
    { image: image1, title: "Achat et réservation de billet", price: 3500, solde: 0.2 },
    { image: image2, title: "Assistance visa", price: 5500, solde: 0 },
    { image: image3, title: "Réservation d'hotel", price: 5500, solde: 0.13 },
    
    { image: image4, title: "Assurance de voyage", price: 2500, solde: 0.1 },
    
    { image: image5, title: "Attestation de voyage", price: 4500, solde: 0.2 },
    // { image: image4, title: "Netflix Pass", price: 4500, solde: 0.15 },
    // { image: image6, title: "Fifa 24 Premium", price: 4500, solde: 0.25 },
    // { image: rpmCard, title: "Fifa 24 Premium", price: 6500, solde: 0.15 },
];

const collection = () => {
    return(
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                  {/* <div className="subtitle mb20">Achat de code</div> */}
                  <h2 className="wow fadeInUp">Nos Services</h2>
                  <div className="spacer-20"></div>
              </div>
              
            </div>
            <div className="row g-4 sequence">

                {images.map((item) => (
                <div key={`item-${Math.floor(Math.random() * 300)}`} className="col-lg-4 col-md-6 gallery-item">
                    <div className="de-item wow">
                        <div className="d-overlay">
                            {/* <div className="d-label">
                                    - {item.solde * 100 }%
                            </div> */}
                            <div className="d-text">
                                    {/* <h4>{ item.title}</h4> */}
                                    <p className="d-price"><span className="price">{ item.title }</span></p>
                                <Link className="btn-main btn-fullwidth" href="#">Contacter nous</Link>
                            </div>
                        </div>
                            <Image height={300} src={item.image} className="img-cover" alt={item.title } />
                    </div>
                </div>
            ))}
                
            {/* <div className="col-xs-6 text-lg-end">
                  <Link className="btn-main mb-sm-30" href="#">Voir plus</Link>
              </div> */}

            </div>

        </div>
    );
}

export default collection;