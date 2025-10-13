import React from 'react';
import "../styles/sass/components/_media.scss";
import logoInitial from '../styles/img/logo.png';
import imgPlay from '../styles/img/play.png';
import imgLike from '../styles/img/like.png';
import closeModalImg from '../styles/img/exit.png';

function Description({medias}){
  const mediaContainer = document.getElementById('media_container');
  // Fermer la modal
  function closeModal(){
    mediaContainer.style.display = "none"
  };

  // Afficher le bon média pour la fiche détaillée
  // SI mediaID === data-id ALORS on afficheƒ
  return(
    <section id='media_container' className='media_container'>
      {medias.map((media, index)=>(
        <section id="media_modal" key={index}>
          <div className='div-media-img'>
            <img data-id={media.mediaId} className='presentation-bg media-bg' src={media.picture} alt='illustration projet'/>
          </div>
          <div className='closeModal-div' onClick={closeModal}>
            <img id='closeModal' className='closeModal' src={closeModalImg} alt='fermer'/>
          </div>
          <div className='div-media_details'>
            <div className='presentation_details-developpeur-name'>
              <img className='logo-modal' src={logoInitial} alt='Logo initial "p"'/>
              <span className='span-modal'>Sonia KECHIT</span>
            </div>
            {/* titre */}
              <h1>titre</h1>
              {/* résumé */}
                {/* boutons : lecture / infos */}
                <div className='presentation_details-buttons'>
                {/* lecture */}
                  <button className='presentation_details-buttons-first'>
                    <img src={imgPlay} alt='Lecture illustration'/>
                    <p>Voir</p>
                  </button>
                  <button className='presentation_details-buttons-first like-button_media'>
                    <img src={imgLike} alt='j aime'/>
                  </button>
              </div>
          </div>
          <div className='div-media_description'>
            <div className='resume'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='tags'>
              <p>Tags : <span>html, css, js</span></p>
            </div>
          </div>
        </section>
      ))}
    </section>
  )
}
export default Description;