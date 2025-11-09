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
import { Link } from 'react-router-dom';


function Accueil() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [medias, setMedias] = useState([]);
  const [imgAccueil, setImgAccueil] = useState([]);
  const totalLikes = medias.reduce((sum, m) => sum + (Number(m.like) || 0), 0);
  console.log(totalLikes);
  
  useEffect(() =>{
    setImgAccueil(
      data.projets.medias[
        Math.floor(Math.random() * data.projets.medias.length - 1)
      ]
    );
  }, []);

  // ✅ chargement des médias avec initialisation des likes
  useEffect(() => {
    const normalized = data.projets.medias.map(m => ({
      ...m,
      like: Number(m.like) || 0,
      isLiked : m.isLiked ?? false,
    }));
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

  return (
    <>
      <header id="header_accueil" className='header_accueil'>
        <Header medias={medias}
        totalLikes={totalLikes}
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
                  <AccueilDetails imgAccueil={imgAccueil}/>
                </article>
            </div>
          </div>
        </section>
        {/* replay / infos */}
        <div className='presentation_replay-infos'>
          <Link to={"https://fr.legacy.reactjs.org/"} target='_blank'>
          <img className='img-react' src={imgReact} alt='documentation react'/>
          </Link>
          <span>{imgAccueil?.age}</span>
        </div>
        {/* catégories */}
        <div className='categories-container'>
            <h2>Projets</h2>
          <section className='categories'>
            <div className='carousel-arrow left' onClick={HandleScrollLeft}>
              <img src={leftArrow} alt='précédent'/>
            </div>
            {/* Slider (élément scrollable) */}
            <section id="slider" ref={sliderRef} className="slider">
              <Categories medias={medias} onMediaClick={OpenModalCarousel} />
            </section>
            <div className='carousel-arrow right' onClick={HandleScrollRight}>
              <img src={rightArrow} alt='suivant'/>
            </div>
          </section>
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