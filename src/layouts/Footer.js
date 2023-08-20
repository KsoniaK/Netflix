import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/sass/layouts/_footer.scss';
import '../../src/index.scss';
import phone from '../styles/img/phone2.png';
import email from '../styles/img/email2.png';
import gitHub from '../styles/img/github2.png';

function Footer() {
  return (
    <>
        <div className='social-media'>
        <Link to={'mailto:kechiteu@gmail.com'} target="_blank">
          <img src={email} alt='email'/>
        </Link>
          <img src={phone} alt='phone'/>
          <img src={gitHub} alt='gitHub'/>
        </div>
      <section className='mentions-footer'>
        <div>
          <ul>
            <li>contenu</li>
          </ul>
          <button>Git repository</button>
          <p>© 2023 Portfolio</p>
        </div>
        <div>
          <ul>
              <li>contenu</li>
            </ul>
        </div>
        <div>
          <ul>
            <li>contenu</li>
            </ul>
        </div>
        <div>
          <ul>
            <li>contenu</li>
            </ul>
        </div>
      </section>
    </>
  );
}

export default Footer;