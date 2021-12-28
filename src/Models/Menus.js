import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
import Rounds from '../Page/Round/Rounds';
import Register from '../Page/Register/Register_class';
import ResetPassword from '../Page/ResetPassword/ResetPassword';
import Profile from '../Page/Profile/Profile';
import ErrorsRights from '../Page/Errors/ErrorsRights';

class Menus {

  _activateMenuByRoute = [
    {
      route: "/",
      menuName: "Home"
    }, 
    {
      route: "/ResetPassword",
      menuName: "Home"
    },
    , 
    {
      route: "/Register",
      menuName: "Register"
    },
    , 
    {
      route: "/Round",
      menuName: "Round"
    }
  ]


  _menus = [
    {
      path: '/',
      exact: true,
      display: true,
      displayLoggedIn: true,
      component: Home,
      name: 'Home',
      icon: ["fas", "home"]
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
      name: 'Register',
      icon: ["fas", "trophy"]
    },

    {
      path: '/ChampionShip',
      exact: true,
      displayLoggedIn: true,
      display: true,
      component: Championship,
      name: 'Championnat',
      icon: ["fas", "trophy"]
    },
    {
      path: '/Authentication',
      exact: true,
      displayLoggedIn: false,
      display: true,
      component: Authentication,
      name: 'Authentification',
      icon: ["fas", "sign-in-alt"]
    },
    {
      path: '/Rounds',
      display: false,
      displayLoggedIn: true,
      exact: true,
      component: Rounds,
      name: 'Rounds',
      icon: ["fas", "trophy"]
    },
    {
      path: '/Profile',
      display: false,
      displayLoggedIn: true,
      exact: true,
      component: Profile,
      name: 'Profile',
      icon: ["fas", "user"]
    },
    {
      path: '/About',
      displayLoggedIn: true,
      display: true,
      exact: true,
      component: Authentication,
      name: 'A propos'
    }
    ,
    {
      path: '/ErrorRights',
      displayLoggedIn: false,
      display: false,
      exact: true,
      component: ErrorsRights
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