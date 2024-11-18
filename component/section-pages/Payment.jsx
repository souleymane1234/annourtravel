import React from 'react';
import Image from 'next/image';

import image0 from '../../public/img/payments/mobile_money.jpg';
import image1 from '../../public/img/payments/visa.webp';
import image2 from '../../public/img/payments/mastercard.webp';
import image3 from '../../public/img/payments/paypal.webp';
import image4 from '../../public/img/payments/skrill.webp';
import image5 from '../../public/img/payments/jcb.webp';
import image6 from '../../public/img/payments/american-express.webp';

const Payment = () => {
    return(
       <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Moyen de paiement</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">Nous acceptons</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image0} style={{borderRadius: 5}} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image1} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image2} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default Payment;