import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Menus from '../Models/Menus';
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="col-12">
    <Link className='btn btn-outline-secondary' to="/">Home</Link>
  </div>
  : null;
const Icons = (route) => typeof (route.icon) !== "undefined" ? <FontAwesomeIcon icon={route.icon} size="1x" /> : null
const Links = () => {
  const location = useLocation();
  let liClass = "nav-item";
  return Menus.Menus.map(
    (route, index) => (
      (route.display) ?
        (location.pathname === route.path)
          ?
          <li className={liClass} key={index} eventKey="{index}">
            <Link to={route.path} className="nav-link active ">
              <Icons {...route} />
              <span>{route.name}</span>
            </Link>
          </li>
          : <li className={liClass} key={index}>
            <Link to={route.path} className="nav-link">
              <Icons {...route} />
              <span>{route.name}</span>
            </Link>
          </li>
        : null
    )
  )
}

const Menu = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="row menu">
      <div className="col-12  col-lg-3 offset-lg-1">
        <img src={process.env.PUBLIC_URL + '/images/logo_small.png'} className="img-fluid" alt="test" />
      </div>
      <div className="col-12 col-lg-8">
        <navbar className="navbar navbar-expand-lg text-center navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
          aria-expanded={!isNavCollapsed ? true : false} 
          aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end">
              <Links />
            </ul>
          </div>
        </navbar>
      </div>
    </div>

  )
}

export default Menu;