import { ManageApplication } from '../Constantes/Right';
import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Rounds from '../Page/Round/Rounds';
import Register from '../Page/Register/Register';
import ResetPassword from '../Page/ResetPassword/ResetPassword';
import Profile from '../Page/Profile/Profile';
import ErrorsRights from '../Page/Errors/ErrorsRights';
import LogOut from '../Page/Profile/LogOut';
import FormAddRound from '../Page/RoundManagement/FormAddRound';
import RoundManagement from '../Page/RoundManagement/RoundManagement';
import EditProfile from '../Page/Profile/EditProfile';
import ChampionShipAdd from "../Page/Championships/ChampionShipAdd";
import ChampionShipsRead from '../Page/Championships/ChampionShipsRead';
import ChampionShipDetail from '../Page/Championships/ChampionshipDetail';
import ApplicationManagement from '../Page/ApplicationManagement/ApplicationManagement';
import UsersManagement from '../Page/UsersManagement/UsersManagement';
import UserEdit from '../Page/UsersManagement/UserEdit';
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
    orderLoggedIn: 0,
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
    path: '/ChampionShips',
    exact: true,
    displayLoggedIn: true,
    display: true,
    component: ChampionShipsRead,
    name: 'Championnat',
    icon: ["fas", "trophy"],
    // order == ordre d'affichage
    order: 2,
    orderLoggedIn: 2
  },
  {
    path: '/ChampionShip/Add',
    exact: true,
    displayLoggedIn: false,
    display: false,
    component: ChampionShipAdd,
    name: 'ChampionShipsAdd',
    icon: ["fas", "trophy"],
    // order == ordre d'affichage
    order: 2,
    orderLoggedIn: 2
  }, {
    path: '/ChampionShipDetail/:id',
    exact: true,
    displayLoggedIn: false,
    display: false,
    component: ChampionShipDetail,
    name: 'ChampionShipDetail',
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
    order: 6,
    orderLoggedIn: 6
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
    name: 'ResetPassword',
    order: 0,
    orderLoggedIn: 0
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
    orderLoggedIn: 0
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
    component: Home,
    icon: ["fa", "info"],
    name: 'A propos',
    order: 7,
    orderLoggedIn: 7
  },
  // Page d'erreurs.
  {
    path: '/ErrorRights',
    displayLoggedIn: false,
    display: false,
    exact: true,
    component: ErrorsRights,
    order: 0,
    orderLoggedIn: 0
  },
  //Admin
  {
    exact: true,
    path: "/ApplicationManagement",
    displayLoggedIn: true,
    display: false,
    component: ApplicationManagement,
    name: 'Gestion',
    rights: ManageApplication,
    icon: ["fa", "cogs"],
    order: 5,
    orderLoggedIn: 5,
  },
  {
    exact: true,
    path: '/UsersManagement',
    displayLoggedIn: false,
    display: false,
    component: UsersManagement,
    name: 'UsersManagement',
    icon: ["fa", "user-cogs"],
    order: 0,
    orderLoggedIn: 0,
  },
    {
    exact: true,
    path: '/UserEdit/:id',
    displayLoggedIn: false,
    display: false,
    component: UserEdit,
    name: 'UsersManagement',
    icon: ["fa", "user-cogs"],
    order: 0,
    orderLoggedIn: 0,
  }
];

export const MenusMappedConst = [
  {
    path: "/UsersManagement",
    menusMapped: "Gestion"
  },
  {
    path: "/Profile/Edit",
    menusMapped: "Mon profil"
  },
  {
    path: "/ChampionShip/Add",
    menusMapped: "Championnat"
  },
  {
    path: "/ChampionShipDetail/:id",
    menusMapped: "Championnat"
  },
]