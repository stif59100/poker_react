import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
import Round from '../Page/Round/round';
import Inscription from '../Page/Inscription/Inscription_class';
//import Inscription from '../Page/Inscription/Inscription';

import ResetPassword from '../Page/ResetPassword/ResetPassword'
class Menus {
  _menus = [
    {
      path: '/',
      exact: true,
      display : true,
      component: Home,
      name: 'Home',
      icon:["fas", "home"]
    },
    {
      path: '/resetPassword',
      exact: true,
      display : false,
      component: ResetPassword,
      name: 'ResetPassword'
    },
    {
      path: '/Inscription',
      display : true,
      exact: true,
      component: Inscription,
      name: 'Inscription',
      icon: ["fas", "trophy"]
    },
    
    {
      path: '/ChampionShip',
      exact: true,
      display : true,
      component: Championship,
      name: 'Championnat',
      icon: ["fas", "trophy"]
    },
    {
      path: '/Authentication',
      exact: true,
      display : true,
      component: Authentication,
      name: 'Authentification',
      icon: ["fas", "sign-in-alt"]
    },
    {
      path: '/Round',
      display : true,
      exact: true,
      component: Round,
      name: 'Round',
      icon: ["fas", "trophy"]
    },
    {
      path: '/About',
      display : true,
      exact: true,
      component: Authentication,
      name: 'A propos'
    }
  ];
  constructor() {
    console.log("constructor");
  }
  get Menus() {
    return this._menus;
  }
}
export default new Menus();