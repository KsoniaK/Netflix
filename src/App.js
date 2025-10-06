import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Data from "./data/data";
import Profil from "./pages/Profil";
import Logo from "./pages/Logo";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import { Helmet } from 'react-helmet';

// texte de l'app
window.document.body.style.color = "white";

function App() {
  const [datas, setData] = useState([]);

  useEffect(() =>{
    setData(Data);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="portfolio" />
      </Helmet>
      <Routes>
        <Route path='/' element={<Logo />} />
        <Route path='/profil' element={<Profil users={datas.users} />} />
        <Route path='/accueil' element={<Accueil datas={datas}/>} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/404" excat={true} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;