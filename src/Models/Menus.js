import Home from '../Page/Home/Home';
import Authentication from '../Page/Authentication/Authentication';
import Championship from '../Page/Championship/Championship';
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
    console.log(this._menus)
    return this._menus;
  }
}
export default new Menus();