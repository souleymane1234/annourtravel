import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Section = () => {
  // Initialisation de l'état pour les champs du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    numero: '',
    email: '',
    service: '',
    commentaire: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  // Fonction de gestion de l'événement sur les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("https://api.annour-travel.com/client", {
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
        timer: 5000, // L'alerte disparaît après 5 secondes
      });

      // Réinitialiser le formulaire après envoi
      setFormData({
        nom: '',
        numero: '',
        email: '',
        service: '',
        commentaire: ''
      });
    } catch (error) {
      console.error("Erreur:", error);
      setErrorMessage("Une erreur est survenue");
      Swal.fire({
        title: "Erreur",
        text: error.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#1f2024" }}>
    <div className='container p-5'>
    <h2 className="text-center text-white">Formlulaire de demandes</h2>
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
          <label htmlFor="email" className="form-label">Votre mail</label>
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

      {/* Affichage des erreurs */}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      {/* Bouton Envoyer */}
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Envoyer</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Section;
