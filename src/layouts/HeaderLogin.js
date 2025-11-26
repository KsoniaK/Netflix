import React from "react";
import "../styles/sass/layouts/_header.scss";
import "../styles/sass/layouts/_headerLogin.scss";
import { HashLink as Link } from 'react-router-hash-link';

function HeaderLogin() {
  // fonction pour récupérer les images depuis public/img
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <section className="nav_container nav-login">
      <div className="nav_logo nav-login_logo">
        <img src={img("logo.png")} alt="logo" />
      </div>
      <div className="identification">
        <Link to={'/profil'}>
          <button className="identification_button">S'identifier</button>
        </Link>
      </div>
    </section>
  );
}

export default HeaderLogin;
