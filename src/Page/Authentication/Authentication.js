import React from 'react';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "../../Context/UserContext";
import { GetProfile } from "../../Services/UserService"
import { ErrorsForm } from '../Notifications/ErrorsForm';

const FormsAuthentication = (props) => {
  const { setUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorsForm, setErrorsForm] = useState([]);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)
  const [rightsUser, setRightsUser] = useState([])


  const onChangeEmail = (event) => setEmail(event.target.value)
  const onPassword = (event) => setPassword(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    setErrorsForm([])
    GetProfile(email, password, setUser, setErrorsForm,setRightsUser,rightsUser);
  }
  const checkPasswordVisible = (event) => {
    setPasswordIsVisible(!passwordIsVisible)
  }
  useEffect(() => { console.log("je suis dans le use efect"); },[errorsForm])
  return (
    <section className="row authentication" >
      <div className="col-12 col-lg-6 offset-lg-3">
        <ErrorsForm errorsForm={errorsForm} ></ErrorsForm>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="inputEmail" className="w-100 text-left color-gold-light">Identifiant</label>
            <input id="inputEmail" className="form-control input-grey-light" type="text" aria-describedby="emailHelp" placeholder="Votre adresse email ou pseudo" onChange={onChangeEmail} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="w-100 text-left color-gold-light" id='mdp'>Mot de passe</label>
            {(!passwordIsVisible) ?
              <input className="form-control input-grey-light" id="InputNotVisible" type="password" required placeholder="Votre mot de passe" onChange={onPassword} value={password} />
              :
              <input className="form-control input-grey-light" id="inputVisible" type="text" required placeholder="Votre mot de passe" onChange={onPassword} value={password} />}
            <label htmlFor="chkVisibility" id='lblVisible'>Mot de passe visible</label>
            <input type="checkbox" id='chkVisibilite' onChange={checkPasswordVisible} />
            <br></br>
          </div>
          <button type="submit" className="btn btn-gold-light">valider</button>
        </form>
        <Link to='/resetPassword' className="color-gold-light">Identifiant ou mot de passe oublié?</Link>
      </div>
    </section>)
}

const Authentication = () => {
  const { user } = React.useContext(UserContext);
  return (
    (user?.loggedIn) ?
      <Redirect to='/'></Redirect>
      : <FormsAuthentication user={user} ></FormsAuthentication>
  )
};
export default Authentication;