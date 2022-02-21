import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Page/Header/Header';
import Footer from './Page/Footer/Footer';
import Menus from './Models/Menus';
import Profile from './Models/Profile';

import './styles/main.scss';
import './fonts.js';


const Routes = () => {
  
  useEffect(()=>{
    console.log("use effect index");
  })
  return <Switch>
    {
      Menus.Menus(Profile.loggedIn).map(
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
