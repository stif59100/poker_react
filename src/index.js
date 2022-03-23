import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Page/Header/Header';
import Footer from './Page/Footer/Footer';
import MenusModel from './Models/MenusModel';
import Profile from './Models/Profile';

import './styles/main.scss';
import './fonts.js';


const Routes = () => {
  // Page index 
  // Affiche le bon composant à afficher en fonction de la route 
  // Switch/Route sont des composants de base de react 
  return <Switch>
    {
      MenusModel.Menus(Profile.loggedIn).map(
        (route, index) =>
          <Route path={route.path} exact={route.exact} key={index}>
            <div className='row'>
            <Header Profile={Profile}/>
            <route.component Profile={Profile} />
            <Footer />
            </div>
          </Route>
      )
    }
  </Switch>
}
ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
