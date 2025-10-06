import {Navigate} from "react-router-dom";
import "../styles/sass/components/_presentationDetails.scss";
import logoLettre from '../styles/img/p.png';
import imgPlay from '../styles/img/play.png';
import imgInfo from '../styles/img/info.png';

function AccueilDetails({imgAccueil}){

    return(
              <>
              {/* nom */}
              <div className='presentation_details-developpeur-name'>
                <img src={logoLettre} alt='Logo initial "p"'/>
                  <span>Sonia KECHIT</span>
              </div>
                <div>
                  {/* titre */}
                  <h1>{imgAccueil?.title}</h1>
                  {/* résumé */}
                  {imgAccueil ? <p className='resume'>{imgAccueil.resume}</p> : <Navigate to="/404"/>}
                    {/* boutons : lecture / infos */}
                  <div className='presentation_details-buttons'>
                    {/* lecture */}
                    <button className='presentation_details-buttons-first'>
                      <img src={imgPlay} alt='Lecture illustration'/>
                      <p>Voir</p>
                    </button>
                    {/* infos */}
                    <button className='presentation_details-buttons-second'>
                      <img src={imgInfo} alt='Lecture illustration'/>
                      <p>Plus d'infos</p>
                    </button>
                  </div>
                </div>
          </>
    )
}
export default AccueilDetails;
