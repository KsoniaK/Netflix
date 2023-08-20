import React from 'react';
import '../styles/sass/components/_userLogin.scss'
import imageProfil from '../styles/img/imgProfil.png'
import newProfil from '../styles/img/newProfil.webp'
import { Link } from 'react-router-dom';

function UserLogin({users}){

  // async function ProfilSelected() {
  //   const imgs = document.getElementById("img-profil");
  //   console.log(imgs);

  //   imgs.addEventListener(("mouseover", (event) =>{
  //     event.target.style.color = "orange";
  //     console.log(event);
  //   }))
  // }
  // ProfilSelected();
  
  return(
    <article className='profils'>
          {/* user */}
          <div className='profil'>
            <Link to={"/accueil"}>
            <img className='profil-img' id='img-profil' src={imageProfil} alt='ajouter un profil'/>
              {users?.map((user, index) =>(
                <h2 key={index} id={user.id}>{user.name}</h2>
              ))}
            </Link>
          </div>
          {/* ajout user */}
          <div className='profil'>
            <img className='profil-img' src={newProfil} alt='profil-img add-img'/>
                <h2>Ajouter un profil</h2>
          </div>
        </article>
  )
}
export default UserLogin;