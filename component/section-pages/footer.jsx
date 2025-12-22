import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/slider/logo-removebg-preview.png';

const footer = () => {
    return(
        <footer style={{backgroundColor: "#1f2024"}}>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <Image src={image1} alt="footer" className="img-fluid d-md-block imginit" height={100 } width={100 } />
                        <div className="spacer-20"></div>
                        <p>Annour Travel est votre partenaire de confiance pour tous vos projets de voyage. Agence certifiée IATA, nous vous accompagnons dans vos démarches de visa, réservation de billets d'avion et d'hôtels, assurance voyage, et bien plus encore. Faites confiance à notre expertise pour transformer vos rêves de voyage en réalité.</p>
                    </div>
                    <div className="col-lg-4">
                        {/* <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Afiliation</h5>
                                    <ul>
                                        <li><Link href="#">Netflix</Link></li>
                                        <li><Link href="#">Amazon</Link></li>
                                        <li><Link href="#">Playstation</Link></li>
                                        <li><Link href="#">Apple</Link></li>
                                        <li><Link href="#">Xbox</Link></li>
                                        <li><Link href="#">Nintendo</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Pages</h5>
                                    <ul>
                                        <li><Link href="#">Univers VAS</Link></li>
                                        <li><Link href="#">La Boutique</Link></li>
                                        <li><Link href="#">Tournois</Link></li>
                                        <li><Link href="#">Web TV</Link></li>
                                        <li><Link href="#">Télé-réalité</Link></li>
                                        
                                        <li><Link href="#">Votes</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Suivez-nous sur</h5>
                            <div className="social-icons">
                                <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link href="#"><i className="fa-brands fa-discord"></i></Link>
                                <Link href="#"><i className="fa-brands fa-tiktok"></i></Link>
                                <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                           Copyright {new Date().getFullYear()} - ANNOUR TRAVEL
                        </div>
                        {/* <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="#">Conditions générales</Link></li>
                                <li><Link href="#">Politique de confidentialité</Link></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;