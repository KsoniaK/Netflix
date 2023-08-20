import React, {useState, useEffect} from 'react';
import "../styles/sass/components/_categories.scss";
import data from "../data/data.json";
import imgPlay from "../styles/img/play.png";
import imgAdd from "../styles/img/add.png";
import imgLike from "../styles/img/like.png";
import imgMore from "../styles/img/more.png";

function Categories({title}){
  const [projets, setMovies] = useState([]);
  
  useEffect(() =>{
    setMovies(data.projets);
  }, []);

    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');

    // leftArrow.addEventListener('click', function(){
    //   console.log('cliqué à gauche');
    // })
    // rightArrow.addEventListener('click', function(){
    //   console.log('cliqué à droite');
    // });

  return(
    <>
      <h2>{title}</h2>
      {projets.map((projet, index) =>(
        <article key={index} className='category'>
          <div className='category_container'>
            <img className='img-projet' src={projet.pictureCategory} alt='illustration'/>
          </div>
          {/* <div className='card-actions'>
            <div className='play-add-like'>
              <img src={imgPlay} alt='lecture'/>
              <img src={imgAdd} alt='add'/>
              <img src={imgLike} alt='like'/>
            </div>
            <div className='see-more'>
              <img src={imgMore} alt='see more'/>
            </div>
          </div> */}
      </article>
      ))}
    </>
  )
}
export default Categories;