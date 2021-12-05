import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
//import Accueil from './Page/Acceuil/Acceuil';
import Identification from './Page/Identification/Identification';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Identification/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


