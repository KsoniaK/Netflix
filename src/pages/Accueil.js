import React, {useState, useEffect} from 'react';
import data from "../data/data.json";
import Header from '../layouts/Header';
import PresentationDetails from '../components/PresentationDetails';
import Categories from '../components/Categories';
import Footer from '../layouts/Footer';
import '../styles/sass/pages/_accueil.scss';
import imgSound from '../styles/img/sound.png';
import leftArrow from "../styles/img/left-arrow.png";
import rightArrow from "../styles/img/right-arrow.png";
// import imageAccueil from '../styles/img/image-accueil.webp';
// import imgSoundOff from '../styles/img/soundOff.png';
// import imgReplay from '../styles/img/replay.png';



// function Accueil() {
//   const [movies, setMovies] = useState([]);
  
//   useEffect(() =>{
//     setMovies(data.movies);
//   }, []);

//   console.log(movies);

//   const randomPictures = Math.floor(Math.random() * movies.length);
//   // console.log(randomPictures);

//   return (
//     <>
//       <header id="header_accueil" className='header_accueil'>
//         <Nav/>
//       </header>
//       <main className='main'>
//         {/* présentation */}
//         <section className='presentation'>
//           {/* image d'accueil */}
//           <div>
//             {movies.map((movie, index) =>(
//               <img key={index} className='presentation-bg' src={movie.picture} alt='illustration accueil'/>
//             ))}
//             {/* détails */}
//             <div className='presentation_details'>
//               <PresentationDetails movies={movies}/>
//             </div>
//           </div>
//         </section>
//         {/* replay / infos */}
//         <div className='presentation_replay-infos'>
//           <button >
//             <img src={imgSound} alt='couper le son / rejouer'/>
//           </button>
//           <span>10+</span>
//         </div>
//         {/* catégories */}
//         <h2>Projets</h2>
//         <section className='categories'>
//           <Categories movies={movies}/>
//         </section>
//       </main>
//     </>
//   );
// }
// export default Accueil;




function Accueil() {
  const [projets, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() =>{
    setMovies(
      data.projets[
        Math.floor(Math.random() * projets.length)
      ]
    );
  }, []);
  // console.log(projets);

  useEffect(() =>{
    setCategories(
        data.categories
    );
  }, []);
  // console.log(categories);

  return (
    <>
      <header id="header_accueil" className='header_accueil'>
        <Header categories={categories}/>
      </header>
      <main className='main'>
        {/* présentation */}
        <section className='presentation'>
          {/* image d'accueil */}
          <div className='presentation-bg'>
              <img className='presentation-bg' src={projets?.picture} alt='illustration accueil'/>
            {/* détails */}
            <div className='presentation_details'>
              <PresentationDetails projets={projets}/>
            </div>
          </div>
        </section>
        {/* replay / infos */}
        <div className='presentation_replay-infos'>
          <button >
            <img src={imgSound} alt='couper le son / rejouer'/>
          </button>
          <span>{projets.age}</span>
        </div>
        {/* catégories */}
        <div className='categories-container'>
          <div className='carousel-arrow left'>
            <img src={leftArrow} alt='précédent'/>
          </div>
          <section className='categories'>
            {categories.map((categorie, key) => (
              <Categories title={categorie.title}/>
            ))}
          </section>
          <div className='carousel-arrow right'>
            <img src={rightArrow} alt='suivant'/>
           </div>
        </div>
      </main>
        {/* footer */}
      <footer>
        <Footer/>
      </footer>
    </>
  );
}
export default Accueil;