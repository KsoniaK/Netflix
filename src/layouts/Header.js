import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "../styles/sass/layouts/_header.scss";
import logo from "../styles/img/logo.png";
import search from "../styles/img/search.png";
import notification from "../styles/img/notification.png";
import profil from "../styles/img/imgProfil.png";
import phone from "../styles/img/phone.png";
import email from "../styles/img/email.png";
import gitHub from "../styles/img/github.png";
import arrow from "../styles/img/arrow.png";

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
  const divToolsDetails = document.querySelector(".nav_tools");

  // function Test(){
  //   divToolsDetails.addEventListener("click", function(){
  //   console.log("cliqué");
  // });

  // divToolsDetails.addEventListener("click", (e)=>{
  //   console.log("cliqué");
  // });
  // }
  // Test();


  // // Barre de recherche
  // // Faire apparaître la barre de recherche
  // const searchingLoupe = document.getElementById('searchingLoupe');
  // console.log(searchingLoupe);
  // const searchInput = document.getElementById('search_input');
  // console.log(searchInput);

  // searchingLoupe.addEventListener('click', ()=>{
  //   searchInput.classList.add = 'active';
  //   console.log('cliqué');
  // });

  return(
    <section className="nav_container">
      <Link to='/accueil'>
        <div className="nav_logo">
          <img src={logo} alt="logo"/>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav_menu">
            {/* {categories?.map((categorie, index) =>(
              <li className="nav_name" key={index}>{categorie.title}</li>
            ))} */}
            <Link to={'/accueil'}>
              <li className="nav_name">Accueil</li>
            </Link>
            <Link to={'/accueil/#html-css-sass'}>
              <li className="nav_name">Projets</li>
            </Link>
            <Link to={'/accueil/#javascript'}>
              <li className="nav_name">Favoris</li>
            </Link>
        </ul>
        <div className="nav_profil">
          <div className="nav_search">
            <input id="search_input" type="text" name="research" placeholder="Titre, technologie" src={search}/>
            <img id="searchingLoupe" className="nav_profil-img" src={search} alt="search"/>
          </div>
          <img className="nav_profil-img" src={notification} alt="notification"/>
          <div className="nav_tools">
            <img src={profil} alt="profil"/>
            <img className="nav_tools-img" src={arrow} alt="arrow"/>
          </div>
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
              <Link to={'/profil'}>Se déconnecter</Link>
            </div>
        </div>
      </nav>
    </section>
  )
}
export default Header;