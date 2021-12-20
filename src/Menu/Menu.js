import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Menus from '../Models/Menus';

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="col-12">
    <Link className='btn btn-outline-secondary' to="/">Home</Link>
  </div>
  : null;
const Icons = (route) => typeof (route.icon) !== "undefined" ? <FontAwesomeIcon icon={route.icon} size="1x" /> : null
const Links = () => {
  return Menus.Menus.map(
    (route, index) => (
      (route.display) ?
        <li className="nav-item" key={index}>
          <Link to={route.path} className="nav-link">
            <Icons {...route} />
            <span>{route.name}</span>
          </Link>
        </li>
        : null
    ))
}

const Menu = () => {
  return (
    <div className="row">
      <div className="col-2">
        <img src={process.env.PUBLIC_URL + '/images/logo_small.png'} className="img-fluid" alt="test" />
      </div>
      <div className="col-10">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Links />
            </ul>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default Menu;