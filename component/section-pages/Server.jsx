import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image1 from "../../public/img/slider/logo.jpg";

const server = () => {
    return(
        <div className="container">
            <div className="row align-items-center gx-5">
                <div className="col-lg-6">
                    <Image width="1000" height="600" src={image1} className="img-fluid mb-sm-30" alt=""/>
                </div>

                <div className="col-lg-6">
                    {/* <div className="subtitle  mb-3">Univers VAS</div> */}
                    <h2 className="text-gradient">Voyager en toute simplicité</h2>

                </div>
            </div>
        </div>
    );
}

export default server;