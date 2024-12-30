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
                        <Image src={image1} alt="footer" className="img-fluid d-md-block imginit" height={45} />
                        <div className="spacer-20"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium voluptatum maxime, provident voluptatem atque mollitia commodi, voluptate eveniet aut ea eaque incidunt natus sit obcaecati itaque rerum nesciunt tempore!</p>
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
                            <h5>Newsletter</h5>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                            <div className="col text-center">
                                <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <Link href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></Link>
                                <div className="clearfix"></div>
                            </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Votre e-mail est en sécurité chez nous. Nous ne faisons pas de spam.</small>
                            <div className="spacer-30"></div>
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
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                           Copyright 2024 - ANNOUR TRAVEL
                        </div>
                        <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="#">Conditions générales</Link></li>
                                <li><Link href="#">Politique de confidentialité</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;