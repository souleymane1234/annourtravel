import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';

const image1 ="../../img/slider/KODEGAMERZ_BANNER3_TOURNOIS.jpg";
import image2 from'../../public/img/misc/avatar.webp';

const Section = () => {
    return(
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <Parallax className="p-0" bgImage={image1} strength={300}>  
                    <div className="padding60 sm-padding40 sm-p-2 position-relative">
                        
                        <div className="row z-1">
                            <div className="col-lg-6">
                                <div className="subtitle mb-3">+20 Tournois</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Rejoins nous et participe à des tournois épiques</h2>
                                <p className="wow fadeInUp">+25K de gamers dans notre métaverse.</p>
                                <div className="spacer-10"></div>
                                <Link className="btn-main mb10" href="#">Réjoins nous maintenant</Link>
                            </div>
                        </div>
                        
                    </div>
                    </Parallax>
                    <Image src={image2} className="sm-hide position-absolute avatar px-2"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Section;