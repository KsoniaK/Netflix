import React from "react";
import "../styles/sass/components/_carrousel.scss";

function Carrousel({ media, onClose, onLike }) {
  if (!media) return null;

  // fonction pour récupérer les images depuis public/img
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <div className="carousel-container">
      <section id="media_modal" className="media_modal">
        {/* Bouton fermeture */}
        <button className="closeModal-buton" onClick={onClose}>
          <img className="closeModal" src={img("exit.png")} alt="Fermer" />
        </button>

        {/* Image principale */}
        <div className="div-media-img">
          <img
            className="media-bg"
            src={process.env.PUBLIC_URL + media.picture}
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
                <img src={img("play.png")} alt="lecture" />
                <p>Voir</p>
              </button>
            </a>

            <button
              className={`presentation_details-buttons-first like-button_media ${
                media.isLiked ? "liked" : ""
              }`}
              onClick={() => onLike(media.mediaId)}
              aria-pressed={media.isLiked}
            >
              <img
                className={media.isLiked ? "liked" : ""}
                src={img("like.png")}
                alt="j'aime"
              />
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
