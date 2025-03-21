import React from 'react';
import { Parallax } from 'react-parallax';
import YouTubePlayer from './youtubeplayer';
import Image from 'next/image';
import Link from 'next/link'; 


const Section = () => {
   const videoId = 'QB2DfxkaBeU';
    return(
        <Parallax className="home-video">
                {/* <div className="iframeyoutube"><YouTubePlayer videoId={videoId} /></div> */}
                <div className="iframeyoutube">
      <video width="100%" height="auto" controls autoPlay loop muted>
        <source src="/video/video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
                
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="overlay-bg t50 no-top no-bottom">
                    <div className="v-center">
                        <div className="container z-1000">
                            <div className="row align-items-center">                        
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    {/* <div className="subtitle blink mb-4 hide-mobile">Téléréalité</div> */}
                                    <h1 className="mb-0 ">Annour Travel</h1>                                    
                                </div>
                                <div className="col-lg-6 offset-lg-3 text-center text-white">
                                    <p className="">
                                        Voyager avec nous dans tout le monde entier
                                    </p>
                                    <Link className="btn-main " href="#services">Voir nos services</Link>

                                    <div className="spacer-single"></div>

                                    <div className="de-rating-ext">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        {/* <span className="d-val">5</span> */}
                                        {/* basé sur <strong>14086</strong> votes. */}
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