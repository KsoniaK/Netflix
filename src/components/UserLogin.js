import '../styles/sass/components/_userLogin.scss';
import { Link } from 'react-router-dom';

function UserLogin({ users }) {
  // fonction pour récupérer les images depuis public/img
  const img = (name) => process.env.PUBLIC_URL + `/imgProjets/${name}`;

  return (
    <article className='profils'>
      {/* user */}
      <div className='profil'>
        <Link to={"/accueil"}>
          <img
            className='profil-img'
            id='img-profil'
            src={img("imgProfil.jpg")}
            alt='ajouter un profil'
          />
          {users?.map((user, index) => (
            <h2 key={index} id={user.id}>
              {user.name} {user.lastName}
            </h2>
          ))}
        </Link>
      </div>
    </article>
  );
}

export default UserLogin;
