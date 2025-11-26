import React from 'react';
import '../../src/index.scss';
import '../styles/sass/pages/_logo.scss';
import HeaderLogin from '../layouts/HeaderLogin';

function Logo() {
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <div>
      <header className='login-header'>
        <HeaderLogin />
      </header>

      <section className='login-profil_details'>
        <div>
          <img className='login-img' id='login-img' src={img("logo-img.jpg")} alt='ajouter un profil' />
        </div>
      </section>

      <section className='login-description'>
        <h1>Projets en illimité, <br/> et bien plus</h1>
        <span>La visite est gratuite !</span>
        <p>Prêt(e) à voir mon Portfolio ? Appuyez sur "S'identifier"</p>
      </section>
    </div>
  );
}

export default Logo;
