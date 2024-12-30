import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';

const image1 ="../../img/slider/KODEGAMERZ_BANNER3_TOURNOIS.jpg";
import image2 from'../../public/img/misc/avatar.webp';

const Section = () => {
    return(
        <div style={{backgroundColor: "#1f2024"}}>
        <div className='container'>
                        <form id="form_register" className="form-border">
                            <div className='w-full' style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <div className="field-set">
                                <label>Votre nom</label>
                                <input type='name' name='name' id='name' className="form-control px-5" placeholder='mon nom'/>
                            </div>
                            <div className="field-set">
                                <label>Votre numero</label>
                                <input type='tel' name='numberTel' id='numberTel' className="form-control px-5" placeholder='+2250102030405'/>
                            </div>
                            <div className="field-set">
                                <label>Votre email</label>
                                <input type='email' name='email' id='email' className="form-control px-5" placeholder='nom@email.com'/>
                            </div>
                            </div>
                            <div className="field-set">
                                <label>Votre message</label>
                                <textarea
                                    id="message"
                                    placeholder="Votre message ici..."
                                    name="message"
                                    rows={4}
                                    className="form-control"
                                ></textarea>
                                {/* <input type='tel' name='numberTel' id='numberTel' className="form-control" placeholder='+2250102030405'/> */}
                            </div>
                            <div className="spacer-20"></div>
                            <div id="submit" style={{width: "30%", alignSelf: "center", margin: "auto"}}>
                                <input type="button" id="send_message" value="Contactez-nous" className="btn-main btn-fullwidth rounded-3" />
                            </div>
                        </form>
                        </div>
                        </div>
    );
}

export default Section;