import React from 'react';
import Image from 'next/image';

import image1 from"../../public/img/misc/world-map.webp";

const Sectionloc = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-12">
                    <div className="subtitle fadeInUp mb-3">Server locations</div>
                </div>
                <div className="col-lg-6">
                    <h2 className="fadeInUp mb20">25 servers available worldwide for your game.</h2>
                </div>
                <div className="col-lg-6">
                    Take advantage of our server location testing tool to ensure optimal performance. Since your users are spread across various locations, it&apos;s important to identify the server location that provides the best experience for your members. Our ping tester can help you determine the ideal server location for your specific needs.
                </div>

                <div className="spacer-10"></div> */}

                {/* <div className="col-lg-12 fadeInUp">
                    <div className="p-sm-30 pb-sm-0 mb-sm-0">
                        <div className="de-map-hotspot">
                            <div className="de-spot fadeIn" style={{top:'39%', left:'20%',}}>
                                <span>United&nbsp;States</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'76%', left:'87%'}}>
                                <span>Australia</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'68%', left:'80%'}}>
                                <span>Indonesia</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'23%', left:'18%'}}>
                                <span>Canada</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'68%', left:'33%'}}>
                                <span>Brazil</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'45%', left:'75%'}}>
                                <span>China</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'36%', left:'48%'}}>
                                <span>France</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'23%', left:'51%'}}>
                                <span>Sweden</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <div className="de-spot fadeIn" style={{top:'78%', left:'53%'}}>
                                <span>South&nbsp;Africa</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <Image src={image1} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>                         */}
            </div>
        </div>
        <div className="no-bottom wow fadeInRight d-flex z-1000">
          <div className="de-marquee-list wow">
            <div className="d-item">
              <span className="d-item-txt">Reseau social</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Pass Ultimate</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Tournois</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Programme de fidelisation</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">TÉLÉREALITÉ</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">ABONNEMENT VAS</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">WEB TV</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">BOUTIQUE</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>

              <span className="d-item-txt">SMART VOTING</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              
             </div>
          </div>
        </div>
        </>
    );
}

export default Sectionloc;