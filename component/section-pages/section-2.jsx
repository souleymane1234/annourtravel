"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';

const Section = () => {
  // Définition de l'état pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    nom: "",
    numero: "",
    email: "",
    service: "",
    commentaire: "",
  });

  // Fonction pour mettre à jour l'état lorsqu'un champ est modifié
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Met à jour dynamiquement la clé correspondante
    }));
  };

  // Fonction pour envoyer les données au serveur
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost:3000/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
      Swal.fire({
        title: "Formulaire envoyé !",
        text: "Votre demande a été envoyée avec succès. Vous serez contacté par notre équipe commerciale.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 5000, // L'alerte disparaît après 3 secondes
      });
      setFormData({ nom: "", numero: "", email: "", service: "", commentaire: "" }); // Réinitialiser le formulaire après envoi
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue");
    }
  };

  return (
    <div style={{ backgroundColor: "#1f2024" }}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              {/* Champs Nom et Numéro */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="nom" className="form-label">Votre nom</label>
                  <input
                    type="text"
                    name="nom"
                    id="nom"
                    className="form-control"
                    placeholder="Mon nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="numero" className="form-label">Votre numéro</label>
                  <input
                    type="tel"
                    name="numero"
                    id="numero"
                    className="form-control"
                    placeholder="+2250102030405"
                    value={formData.numero}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Champ Email et Sélection du service */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Votre email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="nom@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="service" className="form-label">Choisissez votre service</label>
                  <select
                    className="form-select"
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>-- Sélectionnez --</option>
                    <option value="VisaCanada">Visa Canada</option>
                    <option value="VisaArabieSaoudite">Visa Arabie Saoudite</option>
                    <option value="VisaDubai">Visa Dubai</option>
                    <option value="VisaChine">Visa Chine</option>
                    <option value="VisaMaroc">Visa Maroc</option>
                    <option value="VisaTurquie">Visa Turquie</option>
                    <option value="VisaSchengen">Visa Schengen (France, Espagne)</option>
                    <option value="BilletAvion">Billet d’avion</option>
                    <option value="ReservationHotel">Réservation d’hôtel</option>
                    <option value="CircuitDubai">Package circuit Touristique Dubaï</option>
                    <option value="OUMRA">Package OUMRA Arabie Saoudite</option>
                    <option value="AttestationReservationBillet">Attestation de réservation de billet d’avion</option>
                    <option value="AttestationReservationHotel">Attestation de réservation d'hôtel</option>
                    <option value="AssuranceVoyage">Assurance voyage</option>
                    <option value="CargoEnvoiColis">Cargo et envoi de colis</option>
                    <option value="TransfertArgent">Transfert d’argent</option>
                  </select>
                </div>
              </div>

              {/* Champ Commentaire */}
              <div className="mb-3">
                <label htmlFor="commentaire" className="form-label">Commentaire</label>
                <textarea
                  className="form-control"
                  name="commentaire"
                  id="commentaire"
                  rows="3"
                  value={formData.commentaire}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Bouton Envoyer */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
