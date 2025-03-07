"use client"
import React from 'react';
import { useState } from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";

const image1 ="../../img/slider/Annour Travel_BANNER3_TOURNOIS.jpg";
import image2 from'../../public/img/misc/avatar.webp';

const Section = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return(
        <div style={{backgroundColor: "#1f2024"}}>
            <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="input1" className="form-label">Votre nom</label>
                <input type='text' name='name' id='name' className="form-control" placeholder='mon nom'/>
              </div>
              <div className="col-md-6">
                <label htmlFor="input2" className="form-label">Votre numero</label>
                <input type='tel' name='numberTel' id='numberTel' className="form-control" placeholder='+2250102030405'/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="input3" className="form-label">Votre email</label>
                <input type='email' name='email' id='email' className="form-control" placeholder='nom@email.com'/>
              </div>
              <div className="col-md-6">
                <label htmlFor="select" className="form-label">Choisissez votre service</label>
                <select className="form-select" id="select">
                  <option value="" disabled>
                    -- Sélectionnez --
                    </option>
                    <option value="VisaCanada">Visa Canada</option>
                    <option value="VisaArabieSaoudite">Visa Arabie Saoudite</option>
                    <option value="VisaDubai">Visa Dubai</option>
                    <option value="VisaChine">Visa Chine</option>
                    <option value="VisaMaroc">Visa Maroc</option>
                    <option value="VisaTurquie">Visa Turquie</option>
                    <option value="VisaSchengen">Visa Schengen ( France, Espagne )</option>
                    <option value="illet d’avions">Billet d’avions</option>
                    <option value="Réservation d’hotel">Réservation d’hotel</option>
                    <option value="CircuitDubaï">Package circuit Touristique Dubaï</option>
                    <option value="OUMRA">Package OUMRA Arabie saoudite</option>
                    <option value="Attestationréservationbilletd’avion">Attestation de réservation de billet d’avion</option>
                    <option value="Attestationderéservationd'hôtel">Attestation de réservation d'hôtel</option>
                    <option value="Assurancevoyage">Assurance voyage</option>
                    <option value="Cargoenvoiecolis">Cargo et envoie de colis</option>
                    <option value="Transfertd’argent">Transfert d’argent</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">Commentaire</label>
              <textarea className="form-control" id="textarea" rows="3"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Section;