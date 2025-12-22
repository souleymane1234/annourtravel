import React, { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { Parallax } from "react-parallax";
import Image from 'next/image';

// Images par défaut en cas d'erreur de chargement de l'API
import image1 from '../../public/img/slider/billet.jpg';
import image2 from '../../public/img/slider/visa.jpg';
import image3 from '../../public/img/slider/reservation.jpg';
import image4 from '../../public/img/slider/assurance.jpg';
import image5 from '../../public/img/slider/attestation.jpg';

const defaultServices = [
    { id: 1, name: "Achat et réservation de billet", imageUrl: image1, description: "" },
    { id: 2, name: "Assistance visa", imageUrl: image2, description: "" },
    { id: 3, name: "Réservation d'hotel", imageUrl: image3, description: "" },
    { id: 4, name: "Assurance de voyage", imageUrl: image4, description: "" },
    { id: 5, name: "Attestation de voyage", imageUrl: image5, description: "" },
];

const collection = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Charger les services depuis l'API
        const fetchServices = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://api.annour-travel.com'}/api/site-admin/services`);
                if (response.ok) {
                    const data = await response.json();
                    // Filtrer les services actifs et trier (l'API peut retourner avec un champ d'ordre)
                    if (Array.isArray(data)) {
                        const activeServices = data
                            .filter(service => service && (service.isActive !== false))
                            .sort((a, b) => (a.order || 0) - (b.order || 0));
                        setServices(activeServices);
                    }
                } else {
                    console.warn('Erreur lors du chargement des services, utilisation des services par défaut');
                }
            } catch (error) {
                console.error('Erreur lors du chargement des services:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    // Utiliser les services de l'API ou les services par défaut
    const servicesToRender = services.length > 0 ? services : defaultServices;

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

                {servicesToRender.map((item) => (
                <div key={item.id || `item-${Math.floor(Math.random() * 300)}`} className="col-lg-4 col-md-6 gallery-item">
                    <div className="de-item wow">
                        <div className="d-overlay">
                            <div className="d-text">
                                <p className="d-price"><span className="price">{item.name}</span></p>
                                <Link className="btn-main btn-fullwidth" href="#contact">Contacter nous</Link>
                            </div>
                        </div>
                        {(() => {
                            // Gérer les URLs d'images (locales ou API)
                            const imageSrc = typeof item.imageUrl === 'string' && item.imageUrl.startsWith('/uploads')
                                ? `${process.env.NEXT_PUBLIC_API_URL || 'https://api.annour-travel.com'}${item.imageUrl}`
                                : (item.imageUrl?.src || item.imageUrl || image1);
                            
                            return (
                                <Image 
                                    width={400}
                                    height={300} 
                                    src={imageSrc} 
                                    className="img-cover" 
                                    alt={item.name}
                                    unoptimized={true}
                                />
                            );
                        })()}
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