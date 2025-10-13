import React from "react";
import "../styles/sass/layouts/_header.scss";
import "../styles/sass/layouts/_headerLogin.scss";
import logo from "../styles/img/logo.png";
import { HashLink as Link } from 'react-router-hash-link';

function HeaderLogin(){
  return(
    <section className="nav_container nav-login">
        <div className="nav_logo nav-login_logo">
          <img src={logo} alt="logo"/>
        </div>
          <div className="identification">
            <Link to={'/profil'}>
              <button className="identification_button">S'identifier</button>
            </Link>
          </div>
    </section>
  )
}
export default HeaderLogin;