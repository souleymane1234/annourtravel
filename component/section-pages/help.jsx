import React from 'react';

const help = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">                            
                    <div className="subtitle  mb-3 mt-3">Avez-vous </div>
                    <h2 className=" mb20">Une question ?</h2>
                </div>

                <div className="clearfix"></div>

                <div className="col-lg-6">

                    <div className="accordion accordion-flush" id="accflush">

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c1" aria-expanded="false" aria-controls="flush-c1">
                            Comment acheter un code ?
                          </button>
                        </h3>
                        <div id="flush-c1" className="accordion-collapse collapse" aria-labelledby="flush-h1" data-bs-parent="#accflush">
                          <div className="accordion-body">
                    <p>Cliquez sur le service de votre choix (Playstation, Roblox, Apple, Netflix…),
                      <br />Cliquez sur le montant que vous souhaité
                      <br />Choisissez le moyen de paiement
                      <br />Validez votre achat
                    </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h2">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c2" aria-expanded="false" aria-controls="flush-c2">
                            Combien coûte un code numérique ?
                          </button>
                        </h3>
                        <div id="flush-c2" className="accordion-collapse collapse" aria-labelledby="flush-h2" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Les prix des codes numériques sont compris entre 10£ et 50£</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h3">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c3" aria-expanded="false" aria-controls="flush-c3">
                            Les moyens de paiement ?
                          </button>
                        </h3>
                        <div id="flush-c3" className="accordion-collapse collapse" aria-labelledby="flush-h3" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Les mobiles money (Orange Money, MoMo, Moov Money, Wave) et les cartes de crédit</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h4">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c4" aria-expanded="false" aria-controls="flush-c4">
                            Les codes numériques disponibles ?
                          </button>
                        </h3>
                        <div id="flush-c4" className="accordion-collapse collapse" aria-labelledby="flush-h4" data-bs-parent="#accflush">
                          <div className="accordion-body">
                              <p>Playstation, Roblox, Netflix, Amazon, Apple, Nitendo, Fortnite, XBOX</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h5">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c5" aria-expanded="false" aria-controls="flush-c5">
                            Participer à un tournoi de jeu ?
                          </button>
                        </h3>
                        <div id="flush-c5" className="accordion-collapse collapse" aria-labelledby="flush-h5" data-bs-parent="#accflush">
                          <div className="accordion-body">
                    <p>
                      Cliquez sur le tournoi souhaité (FIFA, TEKKEN...)
                      <br />Renseignez le formulaire de participation
                      <br />Payer votre inscription via Mobile Money ou Carte de crédit
                    </p>
                          </div>
                        </div>
                      </div>

                    </div>
                    
                </div>

                <div className="col-lg-6">
                    <div className="accordion accordion-flush" id="accflush1">

                        <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h1-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c1-1" aria-expanded="false" aria-controls="flush-c1-1">
                            Comment créer un tournoi de jeu ?
                          </button>
                        </h3>
                        <div id="flush-c1-1" className="accordion-collapse collapse" aria-labelledby="flush-h1-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                             <p>Pour créer un tournoi de jeu, vous devez vous inscrire en tant qu'une association, ou passer en mode premium, Vous verrez le bouton "Créer un tournoi de jeu" s'afficher</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h2-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c2-1" aria-expanded="false" aria-controls="flush-c2-1">
                            Participer à une téléréalité ?
                          </button>
                        </h3>
                        <div id="flush-c2-1" className="accordion-collapse collapse" aria-labelledby="flush-h2-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                    <p>
                      Pour participer à une téléréalité vous devez souscrire au service VAS au *701#
                      <br />Participer au quiz et remportez le maximum de points
                      <br />Puis vous participerez à une téléréalité gaming épique et sensationnelle
                    </p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h3-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c3-1" aria-expanded="false" aria-controls="flush-c3-1">
                            Comment souscrire au VAS ?
                          </button>
                        </h3>
                        <div id="flush-c3-1" className="accordion-collapse collapse" aria-labelledby="flush-h3-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                             <p>Tapez la syntaxe USSD *701#</p>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h4-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c4-1" aria-expanded="false" aria-controls="flush-c4-1">
                            Comment fonctionne le VAS ?
                          </button>
                        </h3>
                        <div id="flush-c4-1" className="accordion-collapse collapse" aria-labelledby="flush-h4-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                    <p>
                      Vous recevrez chaque jour :
                      <br />1 SMS sur l'actualité du monde gaming
                      <br />1 SMS pour participez à un Quiz et gagnez des points afin de remporter de nombreux lots
                    </p>

                            </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h3 className="accordion-header" id="flush-h5-1">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-c5-1" aria-expanded="false" aria-controls="flush-c5-1">
                            Les récompenses du VAS ?
                          </button>
                        </h3>
                        <div id="flush-c5-1" className="accordion-collapse collapse" aria-labelledby="flush-h5-1" data-bs-parent="#accflush1">
                          <div className="accordion-body">
                    <p>Chaque semaine :
                      <br />2 abonnés reçoivent des codes numériques de jeux de 25 000f
                      <br />2 abonnés reçoivent des codes numériques de streaming de 25 000f
                      <br />
                      <br />
                      Chaque mois :
                      <br />1 abonné reçoit une console de jeux
                      <br />
                      <br />
                      Chaque trimestre :
                      <br />Le vainqueur de la téléréalité reçoit 350 000f + une console + 10Go
                      <br />Le 2e de la téléréalité reçoit 150 000f + une console + 10Go
                                </p>
                            </div>
                        </div>
                      </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default help;