import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
import Rounds from '../Page/Round/Rounds';
import Register from '../Page/Register/Register_class';
import ResetPassword from '../Page/ResetPassword/ResetPassword';
import Profile from '../Page/Profile/Profile';
import ErrorsRights from '../Page/Errors/ErrorsRights';
import LogOut from '../Page/Profile/LogOut';
import FormAddRound from '../Page/Round/FormAddRound';
import RoundManagement from '../Page/Round/RoundManagement';


class Menus {
  _menus = [
    {
      //path est l'url à laquelle on accède
      path: '/',
      // on indique qu'on voudra bien cette route là
      exact: true,
      display: true,
      // page visible dans le menu une fois logué
      displayLoggedIn: true,
      component: Home,
      name: 'Accueil',
      icon: ["fas", "home"],
      order: 1,
      orderLoggedIn: 1
    },
    {
      path: '/Round/Add',
      exact: true,
      display: false,
      // non visible dans le menu si l'utilisateur n'est pas identifié true = visible false = non visible 
      displayLoggedIn: false,
      component: FormAddRound,
      name: 'RoundAdd',
      icon: ["fas", "trophy"],
      order: 0,
      orderLoggedIn: 0
    },
    
    {
      path: '/RoundManagement/:id',
      exact: true,
      display: false,
      displayLoggedIn: false,
      component: RoundManagement,
      name: 'RoundManagement',
      icon: ["fas", "trophy"],
      order: 0,
      orderLoggedIn: 0
    },
    {
      path: '/ResetPassword',
      exact: true,
      display: false,
      displayLoggedIn: false,
      component: ResetPassword,
      name: 'ResetPassword'
    },
    {
      path: '/Register',
      display: true,
      displayLoggedIn: false,
      exact: true,
      component: Register,
      name: "S'inscrire",
      icon: ["fas", "trophy"],
      order: 4,
      orderLoggedIn: 4
    },

    {
      path: '/ChampionShip',
      exact: true,
      displayLoggedIn: true,
      display: true,
      component: Championship,
      name: 'Championnat',
      icon: ["fas", "trophy"],
      // order == ordre d'affichage
      order: 2,
      orderLoggedIn: 2
    },
    {
      path: '/Authentication',
      exact: true,
      displayLoggedIn: false,
      display: true,
      component: Authentication,
      name: 'Authentification',
      icon: ["fas", "sign-in-alt"],
      order: 3,
    },
    {
      path: '/Rounds',
      display: false,
      displayLoggedIn: true,
      exact: true,
      component: Rounds,
      name: 'Tournois',
      icon: ["fas", "trophy"],
      orderLoggedIn: 3
    },
    {
      path: '/Profile',
      display: false,
      displayLoggedIn: true,
      exact: true,
      component: Profile,
      name: 'Mon profil',
      icon: ["fas", "user"],
      orderLoggedIn: 4
    },
    {
      path: '/About',
      displayLoggedIn: true,
      display: true,
      exact: true,
      component: Authentication,
      name: 'A propos',
      order: 6,
      orderLoggedIn: 6
    }
    ,
    {
      path: '/ErrorRights',
      displayLoggedIn: false,
      display: false,
      exact: true,
      component: ErrorsRights
    },
    {
      path: '/Logout',
      displayLoggedIn: true,
      display: false,
      exact: true,
      component: LogOut,
      icon: ["fas", "sign-out-alt"],
      name: 'Se déconnecter',
      order: 5,
      orderLoggedIn: 5
    }
  ];
  constructor() {
    console.log("constructor");
  }
  Menus(loggedIn) {
    var menu = [];
    if (loggedIn) {
      
      menu =  this._menus.sort(
        // comparaison de la valeur actuelle avec la précédente valeur
        // menu valeur actuelle menu1 valeur suivante
        (menu, menu1) => {
          if (menu.orderLoggedIn < menu1.orderLoggedIn){
            return -1;
          }
          else if (menu.orderLoggedIn > menu1.orderLoggedIn){
            return 1;
          }
          else
            return 0;
        });
    }
    else {
      menu = this._menus.sort(
        (menu, menu1) => {
          if (menu.order < menu1.order)
            return -1;
          else if (menu.order > menu1.order)
            return 1;
          else
            return 0;
        });
    }
    return menu;
  }


}
export default new Menus();