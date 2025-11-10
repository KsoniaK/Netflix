import React, {useState, useEffect} from 'react';
import { useRef } from 'react';
import '../styles/sass/pages/_accueil.scss';
import data from "../data/data.json";
import Header from '../layouts/Header';
import AccueilDetails from '../components/AccueilDetails';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Footer from '../layouts/Footer';
import imgReact from '../styles/img/React-icon.png';
import leftArrow from "../styles/img/left-arrow.png";
import rightArrow from "../styles/img/right-arrow.png";
import noResultResearch from "../styles/img/no-result-research.jpg";
import { Link } from 'react-router-dom';


function Accueil() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [medias, setMedias] = useState([]);
  const [imgAccueil, setImgAccueil] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const totalLikes = medias.reduce((sum, m) => sum + (Number(m.like) || 0), 0);
  
  useEffect(() =>{
    setImgAccueil(
      data.projets.medias[
        Math.floor(Math.random() * data.projets.medias.length - 1)
      ]
    );
  }, []);

  // chargement des médias avec initialisation des likes
useEffect(() => {
  const normalized = data.projets.medias.map(m => {
    // normaliser tags en tableau de strings
    let tagsNormalized = [];

    if (m.tags == null) {
      tagsNormalized = [];
    } else if (Array.isArray(m.tags)) {
      tagsNormalized = m.tags.map(t => String(t).trim());
    } else if (typeof m.tags === "string") {
      // si c'est "tag1, tag2" ou "tag1 tag2"
      tagsNormalized = m.tags.split(/[,;|]/).map(t => String(t).trim()).filter(Boolean);
      if (tagsNormalized.length === 0) {
        // fallback: split par espace
        tagsNormalized = m.tags.split(/\s+/).map(t => String(t).trim()).filter(Boolean);
      }
    } else if (typeof m.tags === "object") {
      // objet — essayons d'extraire valeurs ou clés
      try {
        // si c'est un objet {0:"tag1",1:"tag2"} ou {tech:"react"}
        const values = Object.values(m.tags).map(v => String(v).trim()).filter(Boolean);
        if (values.length > 0) {
          tagsNormalized = values;
        } else {
          const keys = Object.keys(m.tags).map(k => String(k).trim()).filter(Boolean);
          tagsNormalized = keys;
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




  // Slider Carousel
  const sliderRef = useRef(null);
  const scrollAmount = 440;

  function HandleScrollLeft(){
      console.log("sliderRef.current =", sliderRef.current);

    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  function HandleScrollRight(){
      console.log("sliderRef.current =", sliderRef.current);

    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };


  // Ouverture / Fermeture carousel
function OpenModalCarousel(mediaId) {
  const index = medias.findIndex(m => m.mediaId === mediaId);
  if (index !== -1) {
    setSelectedMedia(index);
  }
}

  function CloseModalCarousel() {
    setSelectedMedia(null);
  }

  // Likes
function HandleLike(mediaId) {
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
}

// Filtre
// calculer la liste filtrée à afficher
const q = (searchValue || "").trim().toLowerCase();

const filteredMedias = medias.filter(m => {
  if (!q) return true; // pas de recherche -> tout afficher

  const title = String(m.title || "").toLowerCase();
  const resume = String(m.resume || "").toLowerCase();
  const tags = (m.tags || []).join(" ").toLowerCase();

  return title.includes(q) || resume.includes(q) || tags.includes(q);
});


  return (
    <>
      <header id="header_accueil" className='header_accueil'>
        <Header
        totalLikes={totalLikes}
        onSearchChange={setSearchValue}
        />
      </header>
      <main className='main'>
        {/* présentation */}
        <section className='presentation'>
          {/* image d'accueil */}
          <div className='presentation-bg'>
              <img className='presentation-bg presentation-bg-img' src={imgAccueil?.picture} alt='illustration accueil'/>
            {/* détails */}
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
        {/* replay / infos */}
        <div className='presentation_replay-infos'>
          <Link to={"https://fr.legacy.reactjs.org/"} target='_blank'>
          <img className='img-react' src={imgReact} alt='documentation react'/>
          </Link>
          <span>{imgAccueil?.tags}</span>
        </div>
        {/* catégories */}
          <div className='categories-container'>
            <h2>Projets</h2>
            {filteredMedias.length === 0 ? (
              <div className="no-results">
                <h3>Aucun projet ne correspond à votre recherche 🧐</h3>
              </div>
            ) : (
              <section className='categories'>
                <div className='carousel-arrow left' onClick={HandleScrollLeft}>
                  <img src={leftArrow} alt='précédent'/>
                </div>

                <section id="slider" ref={sliderRef} className="slider">
                  <Categories medias={filteredMedias} onMediaClick={OpenModalCarousel} />
                </section>

                <div className='carousel-arrow right' onClick={HandleScrollRight}>
                  <img src={rightArrow} alt='suivant'/>
                </div>
              </section>
            )}
          </div>
          {/* Media modal */}
              {selectedMedia !== null && (
                <Carrousel 
                  media={medias[selectedMedia]} 
                  onClose={CloseModalCarousel}
                  onLike={HandleLike}
                />
              )}
      </main>
        {/* footer */}
      <footer>
        <Footer/>
      </footer>
    </>
  );

}
export default Accueil;