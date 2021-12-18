import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Link
} from "react-router-dom";
import Menus from '../Models/Menus';

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="col-12">
    <Link className='btn btn-outline-secondary' to="/">Home</Link>
  </div>
  : null;
  const Icons = route =><FontAwesomeIcon icon={route.icon} size="1x"/>
  const Links = () => {
    return Menus.Menus.map(
      (route, index) => (
        <li className="u-nav-item">
          <Link to={route.path} key={index} className="u-border-2 u-border-active-grey-90 u-border-hover-grey-50 u-border-no-left u-border-no-right u-border-no-top u-button-style u-nav-link u-text-active-grey-5 u-text-hover-grey-90">
          <Icons icon={route}/>
          <FontAwesomeIcon icon={route.icon} size="1x"/>

          <span>{route.name}</span>
          </Link>
        </li>
    ))
  }

const Menu = () => {
  return (
    <div className="u-clearfix u-sheet u-valign-top-lg u-valign-top-xl u-sheet-2">
      <div className="u-image u-logo u-image-1"
        data-image-width="500"
        data-image-height="156">
        <img src={process.env.PUBLIC_URL + '/images/logo_small.png'} className="u-logo-image u-logo-image-1" data-image-width="80" alt="test" />
      </div>

      <nav data-position="" className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div className="menu-collapse" >
          <div className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link">
            <FontAwesomeIcon icon={['fas','bars']}></FontAwesomeIcon>
          </div>
        </div>
        <div className="u-custom-menu u-nav-container">
          <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
            <Links />
          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close"></div>
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                <Links />
              </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
        </div>
      </nav>
    </div>

  )
}

export default Menu;