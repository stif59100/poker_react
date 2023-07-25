import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Page/Header/Header';
import Footer from './Page/Footer/Footer';
import { MenuSorted } from './Services/MenuService';
import Profile from './Models/Profile';
import UserContext from './Context/UserContext';
import RoundsContext from './Context/RoundsContext';
import ChampionShipsContext from './Context/ChampionShipsContext';
import { ValidateToken } from "./Services/TokenService" 
import './styles/main.scss';
import './fonts.js';


const Routes = () => {
  const [user, setUser] = useState(new Profile());
  const [rounds, setRound] = useState([]);
  const [championShips, setChampionShips] = useState([]);
  const Menus = MenuSorted(user);

  useEffect(() => {ValidateToken(setUser)},[])
  // Page index 
  // Affiche le bon composant à afficher en fonction de la route 
  // Switch/Route sont des composants de base de react 
  return <Switch>
  {
    Menus.map(
      (route, index) =>
      <Route path={route.path} exact={route.exact} key={index}>
      <UserContext.Provider value={{ user, setUser }}>
      <ChampionShipsContext.Provider value={{ championShips, setChampionShips }}>
      <RoundsContext.Provider value={{ rounds, setRound }}>
      <div className='row'>
      <Header />
      <route.component />
      <Footer />
      </div>
      </RoundsContext.Provider>
      </ChampionShipsContext.Provider>
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
    