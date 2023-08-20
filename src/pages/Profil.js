import React from 'react';
import UserLogin from '../components/UserLogin';
import '../../src/index.scss';
import '../styles/sass/pages/_profil.scss'
import '../styles/style.scss'

function Profil({users}){

  return(
    <main className="main-profil">
        <section className='profil-container'>
          <h1 className="main-profil-h1">Portfolio de :</h1>
          <UserLogin users={users}/>
          <button className='main-profil-button'>Gérer les profils</button>
        </section>
    </main>
  )
}
export default Profil;