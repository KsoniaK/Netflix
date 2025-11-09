import React from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import '../../src/index.scss';
import '../styles/sass/pages/_profil.scss'
import '../styles/style.css'

function Profil({users}){

  return(    
    <main className="main-profil">
          <section className='profil-container'>
            <h1 className="main-profil-h1">Portfolio de ?</h1>
              <UserLogin users={users}/>
              <Link to={'/'}>
                <button className='main-profil-button'>Accueil</button>
              </Link>
        </section>
    </main>
  )
}
export default Profil;