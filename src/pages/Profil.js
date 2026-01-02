import React from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import '../../src/index.scss';
import '../styles/sass/pages/_profil.scss';
import arrowPrev from '../styles/img/retour.png';

function Profil({users}){

  return(    
    <main className="main-profil">
          <section className='profil-container'>
            <h1 className="main-profil-h1">Portfolio de ?</h1>
              <UserLogin users={users}/>
              <Link to={'/'}>
                <img className='back-to-logo' id='back-to-logo' src={arrowPrev} alt='retour accueil' />
                {/* <button className='main-profil-button'>Retour</button> */}
              </Link>
        </section>
    </main>
  )
}
export default Profil;