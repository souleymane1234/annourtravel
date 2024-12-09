import React from 'react';
import { Parallax } from "react-parallax";
import Link from 'next/link'; 
import Image from 'next/image';

const image2 ='../../img/background/2.webp';

const Download = () => {
    return(
        <div className="container">
            <div className="row position-relative">
                <div className="col-lg-12">
                    <Parallax className="padding60 sm-padding40" bgImage={image2} strength={400}> 
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Partout, pour vous</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Accessible de n'importe quel type d'appareil</h2>
                            <p>Nous vous suivons partout et avec la connectivité la plus modéré</p>                            
                            <Link href="#"><Image width="180" height="100" src="../../img/misc/download-appstore.webp" className="img-fluid mb-sm-20" alt="download"/></Link>&nbsp;
                            <Link href="#"><Image width="180" height="100" src="../../img/misc/download-playstore.webp" className="img-fluid mb-sm-20" alt="download"/></Link>
                        </div>
                    </Parallax>
                    <Image width="700" height="550" src="../../img/misc/MAN_KODEGAMERZ1.png" className="max-content sm-hide position-absolute bottom-0 end-0"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Download;