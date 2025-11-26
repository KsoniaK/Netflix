import React, { useState, useEffect, useRef } from 'react';
import '../styles/sass/pages/_accueil.scss';
import data from "../data/data.json";
import Header from '../layouts/Header';
import AccueilDetails from '../components/AccueilDetails';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';

function Accueil() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [medias, setMedias] = useState([]);
  const [imgAccueil, setImgAccueil] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const totalLikes = medias.reduce((sum, m) => sum + (Number(m.like) || 0), 0);

  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  // image d'accueil aléatoire
  useEffect(() => {
    setImgAccueil(
      data.projets.medias[
        Math.floor(Math.random() * data.projets.medias.length - 1)
      ]
    );
  }, []);

  // chargement des médias avec normalisation
  useEffect(() => {
    const normalized = data.projets.medias.map(m => {
      let tagsNormalized = [];

      if (m.tags == null) {
        tagsNormalized = [];
      } else if (Array.isArray(m.tags)) {
        tagsNormalized = m.tags.map(t => String(t).trim());
      } else if (typeof m.tags === "string") {
        tagsNormalized = m.tags.split(/[,;|]/).map(t => String(t).trim()).filter(Boolean);
        if (tagsNormalized.length === 0) {
          tagsNormalized = m.tags.split(/\s+/).map(t => String(t).trim()).filter(Boolean);
        }
      } else if (typeof m.tags === "object") {
        try {
          const values = Object.values(m.tags).map(v => String(v).trim()).filter(Boolean);
          if (values.length > 0) {
            tagsNormalized = values;
          } else {
            tagsNormalized = Object.keys(m.tags).map(k => String(k).trim()).filter(Boolean);
          }
        } catch (e) {
          tagsNormalized = [];
        }
      } else {
        tagsNormalized = [];
      }

      return {
        ...m,
        like: Number(m.like) || 0,
        isLiked: m.isLiked ?? false,
        tags: tagsNormalized
      };
    });

    setMedias(normalized);
  }, []);

  const sliderRef = useRef(null);
  const scrollAmount = 440;

  const HandleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  const HandleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const OpenModalCarousel = (mediaId) => {
    const index = medias.findIndex(m => m.mediaId === mediaId);
    if (index !== -1) setSelectedMedia(index);
  };

  const CloseModalCarousel = () => setSelectedMedia(null);

  const HandleLike = (mediaId) => {
    setMedias(prev =>
      prev.map(m => {
        if (m.mediaId !== mediaId) return m;
        const alreadyLiked = m.isLiked === true;
        return {
          ...m,
          isLiked: !alreadyLiked,
          like: Number(m.like || 0) + (alreadyLiked ? -1 : 1)
        };
      })
    );
  };

  const q = (searchValue || "").trim().toLowerCase();
  const filteredMedias = medias.filter(m => {
    if (!q) return true;
    const title = String(m.title || "").toLowerCase();
    const resume = String(m.resume || "").toLowerCase();
    const tags = (m.tags || []).join(" ").toLowerCase();
    return title.includes(q) || resume.includes(q) || tags.includes(q);
  });

  return (
    <>
      <header id="header_accueil" className='header_accueil'>
        <Header totalLikes={totalLikes} onSearchChange={setSearchValue} />
      </header>

      <main className='main'>
        <section className='presentation'>
          <div className='presentation-bg'>
            <img
              className='presentation-bg presentation-bg-img'
              src={process.env.PUBLIC_URL + imgAccueil?.picture}
              alt='illustration accueil'
            />
            <div className='presentation_details'>
              <article>
                <AccueilDetails
                  imgAccueil={imgAccueil}
                  onInfosClick={() => {
                    const index = medias.findIndex(m => m.mediaId === imgAccueil.mediaId);
                    setSelectedMedia(index);
                  }}
                />
              </article>
            </div>
          </div>
        </section>

        <div className='presentation_replay-infos'>
          <Link to={"https://fr.legacy.reactjs.org/"} target='_blank'>
            <img className='img-react' src={img("React-icon.png")} alt='documentation react' />
          </Link>
          <span>{imgAccueil?.tags}</span>
        </div>

        <div className='categories-container'>
          <h2>Projets</h2>
          {filteredMedias.length === 0 ? (
            <div className="no-results">
              <h3>Aucun projet ne correspond à votre recherche 🧐</h3>
            </div>
          ) : (
            <section className='categories'>
              <div className='carousel-arrow left' onClick={HandleScrollLeft}>
                <img src={img("left-arrow.png")} alt='précédent' />
              </div>

              <section id="slider" ref={sliderRef} className="slider">
                <Categories medias={filteredMedias} onMediaClick={OpenModalCarousel} />
              </section>

              <div className='carousel-arrow right' onClick={HandleScrollRight}>
                <img src={img("right-arrow.png")} alt='suivant' />
              </div>
            </section>
          )}
        </div>

        {selectedMedia !== null && (
          <Carrousel
            media={medias[selectedMedia]}
            onClose={CloseModalCarousel}
            onLike={HandleLike}
          />
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Accueil;
