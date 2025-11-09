import React from "react";
import "../styles/sass/components/_carrousel.scss";
import imgPlay from "../styles/img/play.png";
import imgLike from "../styles/img/like.png";
import closeModalImg from "../styles/img/exit.png";

function Carrousel({ media, onClose, onLike}) {
  if (!media) return null;

  return (
    <div className="carousel-container">
      <section id="media_modal" className="media_modal">
        {/* Bouton fermeture */}
        <button className="closeModal-buton" onClick={onClose}>
          <img className="closeModal" src={closeModalImg} alt="Fermer" />
        </button>

        {/* Image principale */}
        <div className="div-media-img">
          <img
            className="media-bg"
            src={media.picture}
            alt={media.title}
          />
        </div>

        {/* Détails */}
        <div className="div-media_details">
          <h1 className="carouselPhotosNames">{media.title}</h1>

          {/* Boutons : Voir + Like */}
          <div className="presentation_details-buttons">
            <a href={media.url} target="_blank" rel="noreferrer">
              <button className="presentation_details-buttons-first">
                <img src={imgPlay} alt="lecture" />
                <p>Voir</p>
              </button>
            </a>

            <button className={`presentation_details-buttons-first like-button_media ${
             media.isLiked ? 'liked' : ''
            }`}
              onClick={() => onLike(media.mediaId)}
              aria-pressed={media.isLiked}
            >
              <img src={imgLike} alt="j'aime" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="div-media_description">
          <div className="resume-carousel">
            <p>{media.resume}</p>
          </div>

          {media.tags && (
            <div className="tags">
              <p>
                Tags : <span>{media.tags}</span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
export default Carrousel;