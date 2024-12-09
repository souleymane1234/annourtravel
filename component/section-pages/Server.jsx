import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import image1 from "../../public/img/misc/IMAGE_KODEGAMERZ_NOBG.png";

const server = () => {
    return(
        <div className="container">
            <div className="row align-items-center gx-5">
                <div className="col-lg-6">
                    <Image width="1000" height="600" src={image1} className="img-fluid mb-sm-30" alt=""/>
                </div>

                <div className="col-lg-6">
                    <div className="subtitle  mb-3">Univers VAS</div>
                    <h2 className=""><span className="text-gradient">#*****#</span> et rentre dans la liste des gagnants chaque semaine</h2>
                    <p className="">De nombreux lots sont disponibles</p>

                    <ul className="de-server">
                        <li>Code de jeux</li>
                        <li>Console de jeux</li>
                        <li>Téléréalité</li>
                        <li>Tournois</li>
                        <li>Herbergement mutualisée</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default server;