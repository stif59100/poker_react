import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Page/Header/Header';
import Footer from './Page/Footer/Footer';
import { MenuSorted } from './Services/MenuService';
import Profile from './Models/Profile';
import UserContext from './Context/UserContext';
import RoundsContext from './Context/RoundsContext';
import { GetRounds } from './Services/RoundsService';
import './styles/main.scss';
import './fonts.js';
import { useEffect } from 'react';


const Routes = () => {
  const userIsLoggin = (!localStorage.getItem("user")) ? new Profile() : JSON.parse(localStorage.getItem("user"));
  console.log(localStorage.getItem("user"))
  console.log(userIsLoggin)
  const [user, setUser] = useState(userIsLoggin);
  const [rounds, setRound] = useState([]);
  const Menus = MenuSorted(user);

  useEffect(()=>  GetRounds(setRound), [setRound] )
  // Page index 
  // Affiche le bon composant à afficher en fonction de la route 
  // Switch/Route sont des composants de base de react 
  return <Switch>
    {
      Menus.map(
        (route, index) =>
          <Route path={route.path} exact={route.exact} key={index}>
            <UserContext.Provider value={{ user, setUser }}>
              <RoundsContext.Provider value={{ rounds, setRound }}>
                <div className='row'>
                  <Header />
                  <route.component />
                  <Footer />
                </div>
              </RoundsContext.Provider>
            </UserContext.Provider>
          </Route>

      )
    }
  </Switch >
}
ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
