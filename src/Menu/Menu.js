import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Menus from '../Models/Menus';
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';

const Menu = (props) => {
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
              <Links Profile={props.Profile}/>
            </ul>
          </div>
        </navbar>
      </div>
    </div>

  )
}
const Links = (props) => {
  return Menus.Menus(props.Profile.loggedIn).map(
    (route, index) => {
     return (props.Profile.loggedIn)?
         (route.displayLoggedIn )?<LinksLogged route={route} index={index} key={index}></LinksLogged>:null
      :(route.display)?<LinksNoLogged route={route} index={index} key={index} ></LinksNoLogged>:null
    }
  )
}
const LinksNoLogged = (props) => {
  const location = useLocation();
  return (location.pathname === props.route.path)?
  <LinkActive route={props.route} index={props.index} ></LinkActive>:
  <LinkNoActive route={props.route} index={props.index}></LinkNoActive>
}

const LinksLogged = (props)=>{
  const location = useLocation();
  return (location.pathname === props.route.path)?
  <LinkActive route={props.route} index={props.index}></LinkActive>:
  <LinkNoActive route={props.route} index={props.index}></LinkNoActive>

}


const LinkActive = (props) =>{
 return <li className="nav-item active" key={props.index} >
    <Link to={props.route.path} className="nav-link active ">
      <Icons {...props.route} />
      <span>{props.route.name}</span>
    </Link>
  </li>
}
const LinkNoActive = (props) =>{
  return <li className="nav-item" key={props.index} >
  <Link to={props.route.path} className="nav-link">
    <Icons {...props.route} />
    <span>{props.route.name}</span>
  </Link>
</li>
}
  
const Icons = (route) => typeof (route.icon) !== "undefined" ? <FontAwesomeIcon icon={route.icon} size="1x" /> : null

export default Menu;