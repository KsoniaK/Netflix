import { Navigate } from "react-router-dom";
import "../styles/sass/components/_presentationDetails.scss";

function AccueilDetails({ imgAccueil, onInfosClick }) {
  function HandleOpenLink() {
    if (imgAccueil?.url) {
      window.open(imgAccueil.url, "_blank");
    }
  }

  // Fonction pour récupérer les images depuis le dossier public
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <>
      {/* nom */}
      <div className='presentation_details-developpeur-name'>
        <img src={img("p.png")} alt='Logo initial "p"' />
        <span>Sonia KECHIT</span>
      </div>

      <div>
        {/* titre */}
        <h1>{imgAccueil?.title}</h1>
        {/* résumé */}
        {imgAccueil ? <p className='resume'>{imgAccueil.resume}</p> : <Navigate to="/404" />}
        
        {/* boutons : lecture / infos */}
        <div className='presentation_details-buttons'>
          {/* lecture */}
          <button
            className='presentation_details-buttons-first'
            onClick={HandleOpenLink}
          >
            <img src={img("play.png")} alt='Lecture illustration' />
            <p>Voir</p>
          </button>

          {/* infos */}
          <button
            className='presentation_details-buttons-second'
            onClick={onInfosClick}
          >
            <img src={img("info.png")} alt='Lecture illustration' />
            <p>Plus d'infos</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default AccueilDetails;
