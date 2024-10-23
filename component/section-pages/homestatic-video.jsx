import React from 'react';
import { Parallax } from 'react-parallax';
import YouTubePlayer from './youtubeplayer';
import Image from 'next/image';
import Link from 'next/link'; 


const Section = () => {
   const videoId = 'QB2DfxkaBeU';
    return(
        <Parallax className="home-video">
                <div className="iframeyoutube"><YouTubePlayer videoId={videoId} /></div>
                
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="overlay-bg t50 no-top no-bottom">
                    <div className="v-center">
                        <div className="container z-1000">
                            <div className="row align-items-center">                        
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="subtitle blink mb-4 hide-mobile">Nous sommes</div>
                                    <h1 className="mb-0 ">Kode Gamers</h1>                                    
                                </div>
                                <div className="col-lg-6 offset-lg-3 text-center text-white">
                                    <p className="">
                                        Le jeu en un endroit
                                    </p>
                                    <Link className="btn-main " href="#">Voir nos services</Link>

                                    <div className="spacer-single"></div>

                                    <div className="de-rating-ext">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="d-val">4.85</span>
                                        basé sur <strong>14086</strong> votes.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Parallax>
    );
}

export default Section;