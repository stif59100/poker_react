import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { observer } from "mobx-react-lite"
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menus from './Models/Menus';
import Profile from './Models/Profile';

import './styles/main.scss';
import './fonts.js';


const Routes = observer(() => {
  const [profile, setprofile] = useState(Profile);
  return <Switch>
    {
      Menus.Menus.map(
        (route, index) =>
          <Route path={route.path} exact={route.exact} key={index}>
            <Header Profile={profile} />
            <route.component Profile={profile} />
            <Footer />
          </Route>
      )
    }
  </Switch>
})
ReactDOM.render(
  <React.StrictMode>
    <Router >

      <Routes />

    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
