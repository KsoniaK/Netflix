import React from 'react';
import '../styles/sass/components/_userLogin.scss'
import imageProfil from '../styles/img/imgProfil.jpg'
import { Link } from 'react-router-dom';

function UserLogin({users}){
  
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
        </article>
  )
}
export default UserLogin;