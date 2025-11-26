import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/sass/pages/_error.scss";

function Error() {
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <>
      <header className='error-header'>
        <Link to={"/accueil"}>
          <img src={img("logo.png")} alt='Logo' />
        </Link>
      </header>
      <section className='error-section'>
        <div className='error-contenu'>
          <h1>Vous cherchez votre chemin ?</h1>
          <p>
            Désolée, nous n'avons pas trouvé cette page.<br />
            Un vaste choix de projets vous attend sur la page d'accueil.
          </p>
          <Link to={"/accueil"}>
            <button>Accueil Portfolio</button><br />
          </Link>
          <span>Code d'erreur : <strong>404</strong></span><br />
          <span>PERDUS DANS L'ESPACE</span>
        </div>
        <img className='error-img' src={img("error-img.jpg")} alt="error page" />
      </section>
    </>
  );
}

export default Error;
