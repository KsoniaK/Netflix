import React, { useState, useEffect } from 'react';  
import { HashLink as Link } from 'react-router-hash-link';  
import "../styles/sass/layouts/_header.scss";  

function Header({ totalLikes = 0, onSearchChange }) {  
  const [showSearch, setShowSearch] = useState(false);  

  useEffect(() => {  
    function scrollFunction() {  
      const header = document.getElementById("header_accueil");  
      if (!header) return;  

      if (window.scrollY > 20) {  
        header.style.top = "0";  
        header.style.backgroundColor = "#141414";  
      } else {  
        header.style.background = "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)";  
      }  
    }  

    window.addEventListener("scroll", scrollFunction);  
    return () => window.removeEventListener("scroll", scrollFunction);  
  }, []);  

  function toggleSearch() {  
    setShowSearch(s => !s);  
  }  

  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;  

  return (  
    <section className="nav_container">  
      <Link to='/accueil'>  
        <div className="nav_logo">  
          <img src={img("logo.png")} alt="logo" />  
        </div>  
      </Link>  

      <nav className="nav">  
        <ul className="nav_menu">  
          <Link to={'https://github.com/KsoniaK?tab=repositories'} target="_blank">  
            <li className="nav_name">GitHub</li>  
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
            {showSearch && (  
              <input  
                id="search_input"  
                type="text"  
                name="research"  
                placeholder="Titre, technologie"  
                style={{ display: showSearch ? "block" : "none" }}  
                onChange={(e) => onSearchChange(e.target.value)}  
              />  
            )}  
            <img  
              id="searchingLoupe"  
              className="nav_profil-img"  
              src={img("search.png")}  
              alt="search"  
              onClick={toggleSearch}  
            />  
          </div>  

          <div className="total-likes">  
            <img className="nav_profil-img" src={img("like.png")} alt="likes compteur" />  
            <span>{totalLikes}</span>  
          </div>  

          <div className="nav_tools">  
            <img src={img("imgProfil.jpg")} alt="profil" />  
            <img className="nav_tools-img" src={img("more.png")} alt="more" />  
          </div>  

          <div className="nav_tools-details">  
            <ul>  
              <li className="tools-li">  
                <img src={img("phone.png")} alt="téléphone" />  
                <Link to={'tel:0783679676'}>07.83.67.96.76</Link>  
              </li>  
              <li className="tools-li">  
                <img src={img("email.png")} alt="email" />  
                <Link to={'mailto:kechiteu@gmail.com'} target="_blank">Mail</Link>  
              </li>  
              <li className="tools-li">  
                <img src={img("github.png")} alt="gitHub" />  
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
  );  
}  

export default Header;  
