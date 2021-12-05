import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

/*import './styles/main.scss';*/
/*import {
  Home,
  Components,
  classNameVsFunctions,
  Localisation,
  HttpRequests,
  UseRef,
  UseReducer,
  Observables
} from './pages/';*/

const routes = [
  /*{
    path: '/httpRequests',
    exact: true,
    component: HttpRequests
  }
  {
    path: '/',
    exact: true,
    component: Home
  }*/
]

const Routes = () => <Switch>
  {
    routes.map(
      (route, index) => <Route path={route.path} exact={route.exact} key={index}>
        <route.component />
      </Route>
    )
  }
</Switch>;

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="col-12">
    <NavLink className='btn btn-outline-secondary' to="/">Home</NavLink>
  </div>
  : null;

const Menu = () => {
  return (

          <div className="u-clearfix u-sheet u-valign-top-lg u-valign-top-xl u-sheet-2">
          <a href="https://nicepage.com" className="u-image u-logo u-image-1" data-image-width="500"
            data-image-height="156">
            <img src={process.env.PUBLIC_URL + '/images/logo_small.png'}  className="u-logo-image u-logo-image-1" data-image-width="80" alt="test"/>
          </a>
      <div className="container py-3">
          <nav data-position="" className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
            <div className="menu-collapse" >
              <a className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link"
                href="#">
                <svg>
                </svg>
                <svg >
                  <defs>
                    <symbol id="menu-hamburger" viewBox="0 0 16 16">
                      <rect y="1" width="16" height="2"></rect>
                      <rect y="7" width="16" height="2"></rect>
                      <rect y="13" width="16" height="2"></rect>
                    </symbol>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link   u-text-active-grey-5 u-text-hover-grey-90"
                    href="index.html" >Accueil</a>
                </li>
                
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-hover-grey-90"
                    href="Identification.html">Identification</a>
                </li>
                <li className="u-nav-item"><a
                    className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-hover-grey-90"
                    href="calendrier.html" >Calendrier</a>
                </li>
                <li className="u-nav-item"><a
                  className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-hover-grey-90"
                  href="inscription.html">Inscription </a>
              </li>
              <li className="u-nav-item"><a
                className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-hover-grey-90"
                href="nous_contacter.html">Nous contacter</a>
            </li>
                
              </ul>
            </div>
            <div className="u-custom-menu u-nav-container-collapse">
              <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-inner-container-layout u-sidenav-overflow">
                  <div className="u-menu-close"></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="index.html"
                       >Accueil</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Championnat.html"
                        >Championnat</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="Identification.html"
                      >Identification</a>
                    </li>
                    <li className="u-nav-item"><a className="u-button-style u-nav-link" href="A-propos.html">A propos</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
            </div>
          </nav>
      </div>
      </div>    
  );
}

export default Menu;