import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MenuSorted } from '../../Services/MenuService';
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import UserContext from "../../Context/UserContext";
// Creation du menu global
const Menu = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
   <div className="row menu">
      <div className="col-12  col-lg-3 offset-lg-1">
        <Link to={"/"}>
        <img src={process.env.PUBLIC_URL + '/images/logo_small.png'} className="img-fluid" alt="test" /></Link>
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
              <Links/>
            </ul>
          </div>
        </navbar>
      </div>
    </div>

  )
}
// boucle sur le model menu permettant afficher le bon composant en fonction de la route.
// et également en fonction de l'utilisateur connecte oun on et de ces droits.
const Links = () => {
  const { user } = React.useContext(UserContext);
  return MenuSorted(user).map(
    (route, index) => {
     return (user?.loggedIn)?
         (route.displayLoggedIn )?<LinksLogged route={route} index={index} key={index}></LinksLogged>:null
      :(route.display)?<LinksNoLogged route={route} index={index} key={index} ></LinksNoLogged>:null
    }
  )
}

// lien du menu lorsque l'utilisateur n'est pas connecté.
// le composant link ou no link permet d'afficher le bon menu en surbrillance
const LinksNoLogged = (props) => {
  const location = useLocation();
  return (location.pathname === props.route.path)?
  <LinkActive route={props.route} index={props.index} ></LinkActive>:
  <LinkNoActive route={props.route} index={props.index}></LinkNoActive>
}

// lien du menu lorsque l'utilisateur est connecté.
// le composant link ou no link permet d'afficher le bon menu en surbrillance
const LinksLogged = (props)=>{
  const location = useLocation();
  return (location.pathname === props.route.path)?
  <LinkActive route={props.route} index={props.index}></LinkActive>:
  <LinkNoActive route={props.route} index={props.index}></LinkNoActive>

}

// composant permettant la surbrillance du menu
const LinkActive = (props) =>{
 return <li className="nav-item active" key={props.index} >
    <Link to={props.route.path} className="nav-link active ">
      <Icons {...props.route} />
      <span>{props.route.name}</span>
    </Link>
  </li>
}
// composant affichange juste le menu
const LinkNoActive = (props) => {
  return <li className="nav-item" key={props.index} >
  <Link to={props.route.path} className="nav-link">
    <Icons {...props.route} />
    <span>{props.route.name}</span>
  </Link>
</li>
}
  
const Icons = (route) => typeof (route.icon) !== "undefined" ? <FontAwesomeIcon icon={route.icon} size="1x" /> : null

export default Menu;