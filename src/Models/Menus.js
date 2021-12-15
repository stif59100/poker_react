import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
import Round from '../Page/Round/round';
class Menus {
  _menus = [
    {
      path: '/',
      exact: true,
      component: Home,
      name: 'Home',
      icon:["fas", "home"]
    },
    {
      path: '/Round',
      exact: true,
      component: Round,
      name: 'Round',
      icon: ["fas", "trophy"]
    },
    {
      path: '/ChampionShip',
      exact: true,
      component: Championship,
      name: 'Championnat',
      icon: ["fas", "trophy"]
    },
    {
      path: '/Authentication',
      exact: true,
      component: Authentication,
      name: 'Authentication',
      icon: ["fas", "sign-in-alt"]
    },
    {
      path: '/About',
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