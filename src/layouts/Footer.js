import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/sass/layouts/_footer.scss';
import '../../src/index.scss';

function Footer() {
  // fonction pour récupérer les images depuis public/img
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <>
      <div className='social-media'>
        <Link to={'mailto:kechiteu@gmail.com'} target="_blank">
          <img src={img("email2.png")} alt='email' />
        </Link>
        <Link to={'tel:0783679676'} target="_blank">
          <img src={img("phone2.png")} alt='phone' />
        </Link>
        <Link to={'https://github.com/KsoniaK?tab=repositories'} target="_blank">
          <img src={img("github2.png")} alt='gitHub' />
        </Link>
        <div>
          <Link to={'https://github.com/KsoniaK/PortfolioNetflix'} target="_blank">
            <button>Git repository</button>
          </Link>
        </div>
      </div>

      {/* <div>
        <Link to={'https://github.com/KsoniaK/PortfolioNetflix'} target="_blank">
          <button>Git repository</button>
        </Link>
      </div> */}

      <section className='mentions-footer'>
        <ul><li>React / Node</li></ul>
        <ul><li>Javascript</li></ul>
        <ul><li>HTML / CSS / SASS</li></ul>
        <ul><li>CMS</li></ul>
        <ul><li>Gestion de projet</li></ul>
      </section>

      <div>
        <p>© 2025 Portfolio, Inc</p>
      </div>
    </>
  );
}

export default Footer;
