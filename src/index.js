import React from 'react';
import ReactDOM from 'react-dom';
//import { sha256 } from 'react-native-sha256';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

//import Menus from './Models/Menus';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './styles/main.scss';
import './fonts.js';
import Menus from './Models/Menus';
  const Routes = () => <Switch>
  {
    Menus.Menus.map(
      (route, index) =>
  
      <Route path={route.path} exact={route.exact} key={index}>
        <route.component/>
      </Route>
    )
  }
</Switch>;
ReactDOM.render(
  <React.StrictMode>      
      <Router>     
      <Header/>
        <Routes/>   
        <Footer/> 
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



