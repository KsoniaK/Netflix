import React, {useState, useEffect} from 'react';
import data from "../data/data.json";
import Header from '../layouts/Header';
import AccueilDetails from '../components/AccueilDetails';
import Categories from '../components/Categories';
import Description from '../components/Description';
import Footer from '../layouts/Footer';
import '../styles/sass/pages/_accueil.scss';
import imgReact from '../styles/img/React-icon.png';
import leftArrow from "../styles/img/left-arrow.png";
import rightArrow from "../styles/img/right-arrow.png";
import { Link } from 'react-router-dom';

function Accueil() {
  const [medias, setMedias] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imgAccueil, setImgAccueil] = useState([]);

  useEffect(() =>{
    setMedias(
      data.projets.medias
    );
  }, []);

  useEffect(() =>{
    setCategories(
      data.projets.categories
    );
  }, []);
  
  useEffect(() =>{
    setImgAccueil(
      data.projets.medias[
        Math.floor(Math.random() * data.projets.medias.length - 1)
      ]
    );
  }, []);

  
  function CarouselRightArrow(){
    console.log('cliqué à droite');
  };

  function CarouselLeftArrow(){
    console.log('cliqué à gauche');
  };

  return (
    <>
      <header id="header_accueil" className='header_accueil'>
        <Header/>
      </header>
      <main className='main'>
        {/* présentation */}
        <section className='presentation'>
          {/* image d'accueil */}
          <div className='presentation-bg'>
              <img className='presentation-bg' src={imgAccueil?.picture} alt='illustration accueil'/>
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
        {categories.map((categorie, index) =>(
        <div className='categories-container' key={index}>
            <h2>{categorie.name}</h2>
          <section className='categories'>
            <div className='carousel-arrow left'>
              <img src={leftArrow} alt='précédent' onClick={CarouselLeftArrow}/>
            </div>
            <div className='carousel-arrow right'>
              <img src={rightArrow} alt='suivant' onClick={CarouselRightArrow}/>
            </div>
            {medias.map((media, index) =>(
              <section key={index}>
                <article className='category'>
                  <Categories media={media} categorie={categorie}/>
                </article>
              </section>
            ))}
          </section>
        </div>
          ))}
          {/* Media modal */}
          <Description medias={medias}/>
      </main>
        {/* footer */}
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default Accueil;