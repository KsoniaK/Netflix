import React from 'react';
import '../../src/index.scss';
import '../styles/sass/pages/_logo.scss'
import HeaderLogin from '../layouts/HeaderLogin';
import loginImg from '../styles/img/logo-img.jpg'

function Logo(){
  return(
  <div>
    <div>
      <header className='login-header'>
        <HeaderLogin/>
      </header>
      <section className='login-profil_details'>
        <div>
          <img className='login-img' id='login-img' src={loginImg} alt='ajouter un profil'/>
        </div>
      </section>
    </div>
    <section className='login-description'>
      <h1>Projets en illimité, et bien plus</h1>
      <span>La visite est gratuite !</span>
      <p>Prêt(e) à voir mon Portfolio ? Appuyez sur "S'identifier"</p>
    </section>










    </div>
  )
}
export default Logo;
