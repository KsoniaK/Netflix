import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/sass/layouts/_header.scss";
import logo from "../styles/img/logo.png";
import search from "../styles/img/search.png";
import like from "../styles/img/like.png";
import profil from "../styles/img/imgProfil.jpg";
import phone from "../styles/img/phone.png";
import email from "../styles/img/email.png";
import gitHub from "../styles/img/github.png";
import more from "../styles/img/more.png";

function Header({categories}){
  // scroll
  window.onscroll = function() {scrollFunction()};

  function scrollFunction(){
    // au scroll vers le bas a 20PX du haut de la page, apparition de la div
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("header_accueil").style.top = "0";
      document.getElementById("header_accueil").style.backgroundColor = "#141414";
    }else {
    //on cache la nav à -68PX top
    document.getElementById("header_accueil").style.background = "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)"
    };
  };

  // faire apparaître le détail du panneau de configuration dans le header
  // Barre de recherche
  const searchInput = document.getElementById('search_input');
  // Faire apparaître la barre de recherche
  function Research(){
    searchInput.style.display = 'block';
  };

  return(
    <section className="nav_container">
      <Link to='/accueil'>
        <div className="nav_logo">
          <img src={logo} alt="logo"/>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav_menu">
            <Link to={'/accueil'}>
              <li className="nav_name">Accueil</li>
              </Link>
              <Link to={'https://github.com/KsoniaK?tab=repositories'} target="_blank">
              <li className="nav_name">GitHub</li>
              </Link>
              <Link to={'mailto:kechiteu@gmail.com'} target="_blank">
              <li className="nav_name">Mail</li>
              </Link>
        </ul>
        <div className="nav_profil">
          <div className="nav_search">
            <input id="search_input" type="text" name="research" placeholder="Titre, technologie" src={search}/>
          </div>
          <img id="searchingLoupe" className="nav_profil-img" src={search} alt="search" onClick={Research}/>
          <img className="nav_profil-img" src={like} alt="likes compteur"/>
          <p>Likes: 0</p>
          <div className="nav_tools">
            <img src={profil} alt="profil"/>
            <img className="nav_tools-img" src={more} alt="more"/>
          </div>
        <div className="nav_tools-details">
            <ul>
              <li className="tools-li">
                <img src={phone} alt="téléphone"></img>
                <p href="phone">07.83.67.96.76</p>
              </li>
              <li className="tools-li">
                <img src={email} alt="email"></img>
                <Link to={'mailto:kechiteu@gmail.com'} target="_blank">Mail</Link>
              </li>
              <li className="tools-li">
                <img src={gitHub} alt="gitHub"></img>
                <Link to={'https://github.com/KsoniaK?tab=repositories'} target="_blank">GitHub</Link>
              </li>
            </ul>
            <div className="connexion_nature">
              <Link to={'/'}>Se déconnecter</Link>
            </div>
        </div>
        </div>
      </nav>
    </section>
  )
}
export default Header;