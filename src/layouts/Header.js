import React, {useState, useEffect} from 'react';
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

function Header({totalLikes = 0}){  
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    function scrollFunction() {
      const header = document.getElementById("header_accueil");
      if (!header) return;

      if (window.scrollY > 20) {
        header.style.top = "0";
        header.style.backgroundColor = "#141414";
      } else {
        header.style.background =
          "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)";
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  // faire apparaître le détail du panneau de configuration dans le header
  function toggleSearch() {
    setShowSearch(s => !s);
  }

  return(
    <section className="nav_container">
      <Link to='/accueil'>
        <div className="nav_logo">
          <img src={logo} alt="logo"/>
        </div>
      </Link>
      <nav className="nav">
        <ul className="nav_menu">
              <li className="nav_name">GitHub</li>
                <Link to={'https://github.com/KsoniaK?tab=repositories'} target="_blank">
                </Link>
                <Link to={'mailto:kechiteu@gmail.com'} target="_blank">
              <li className="nav_name">Mail</li>
                </Link>
                <Link to={'tel:0783679676'}>
              <li className="nav_name">Téléphone</li>
                </Link>
        </ul>
        <div className="nav_profil">
          <div className="nav_search">
            <input id="search_input" type="text" name="research" placeholder="Titre, technologie" src={search} style={{display: showSearch? "block" : "none"}}/>
          </div>
          <img id="searchingLoupe" className="nav_profil-img" src={search} alt="search" onClick={toggleSearch}/>
          <div className="total-likes">
            <img className="nav_profil-img" src={like} alt="likes compteur"/>
              <span>{totalLikes}</span>
          </div>
          <div className="nav_tools">
            <img src={profil} alt="profil"/>
            <img className="nav_tools-img" src={more} alt="more"/>
          </div>
        <div className="nav_tools-details">
            <ul>
              <li className="tools-li">
                <img src={phone} alt="téléphone"></img>
                  <Link to={'tel:0783679676'}>07.83.67.96.76</Link>
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