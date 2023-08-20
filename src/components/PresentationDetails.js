import React, {useState, useEffect} from 'react';
import "../styles/sass/components/_presentationDetails.scss";
import data from "../data/data.json";
import logoInitial from '../styles/img/P.png';
import imgPlay from '../styles/img/play.png';
import imgInfo from '../styles/img/info.png';

// function PresentationDetails({movies}){

//   return(
//           <>
//               {/* nom */}
//               <div className='presentation_details-developpeur-name'>
//                 <img src={logoInitial} alt='Logo initial "p"'/>
//                 <span>Sonia KECHIT</span>
//               </div>
//               {movies.map((movie, index) =>(
//                 <div key={index}>
//                   {/* titre */}
//                   <h1>{movie.title}</h1>
//                   {/* résumé */}
//                   <p className='resume'>{movie.resume}</p>
//                     {/* boutons : lecture / infos */}
//                   <div className='presentation_details-buttons'>
//                     {/* lecture */}
//                     <button className='presentation_details-buttons-first'>
//                       <img src={imgPlay} alt='Lecture illustration'/>
//                       <p>Lecture</p>
//                     </button>
//                     {/* infos */}
//                     <button className='presentation_details-buttons-second'>
//                       <img src={imgInfo} alt='Lecture illustration'/>
//                       <p>Plus d'infos</p>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </>
//   )
// }
// export default PresentationDetails;


function PresentationDetails({projets}){

  return(
          <>
              {/* nom */}
              <div className='presentation_details-developpeur-name'>
                <img src={logoInitial} alt='Logo initial "p"'/>
                <span>Sonia KECHIT</span>
              </div>
                <div>
                  {/* titre */}
                  <h1>{projets.title}</h1>
                  {/* résumé */}
                  <p className='resume'>{projets.resume}</p>
                    {/* boutons : lecture / infos */}
                  <div className='presentation_details-buttons'>
                    {/* lecture */}
                    <button className='presentation_details-buttons-first'>
                      <img src={imgPlay} alt='Lecture illustration'/>
                      <p>Lecture</p>
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
export default PresentationDetails;