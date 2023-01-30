import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
import Rounds from '../Page/Round/Rounds';
import Register from '../Page/Register/Register';
import ResetPassword from '../Page/ResetPassword/ResetPassword';
import Profile from '../Page/Profile/Profile';
import ErrorsRights from '../Page/Errors/ErrorsRights';
import LogOut from '../Page/Profile/LogOut';
import FormAddRound from '../Page/Round/FormAddRound';
import RoundManagement from '../Page/Round/RoundManagement';
import EditProfile from '../Page/Profile/EditProfile';
export const Menus = [
    {
      path: '/',    
      exact: true,
      display: true,
      displayLoggedIn: true,
      component: Home,
      name: 'Accueil',
      icon: ["fas", "home"],
      order: 1,
      orderLoggedIn: 1
    },
    // Tournois
    {
      path: '/Round/Add',
      exact: true,
      display: false,
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
      path: '/Rounds',
      display: false,
      displayLoggedIn: true,
      exact: true,
      component: Rounds,
      name: 'Tournois',
      icon: ["fas", "trophy"],
      orderLoggedIn: 3
    },
    // Championship
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
    // Users
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
      path: '/Profile/Edit',
      exact: true,
      display: false,
      displayLoggedIn: false,
      component: EditProfile,
      name: 'EditProfile',
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
      path: '/Authentication',
      exact: true,
      displayLoggedIn: false,
      display: true,
      component: Authentication,
      name: 'Authentification',
      icon: ["fas", "sign-in-alt"],
      order: 3,
    },
 
      // Enregistremnt
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
    // A propos du site.
    {
      path: '/About',
      displayLoggedIn: true,
      display: true,
      exact: true,
      component: Authentication,
      name: 'A propos',
      order: 6,
      orderLoggedIn: 6
    },
    // Page d'erreurs.
    {
      path: '/ErrorRights',
      displayLoggedIn: false,
      display: false,
      exact: true,
      component: ErrorsRights
    } 
  ];