import { useState } from "react";
import { observer } from 'mobx-react-lite';
import Profile from '../../Models/Profile';
import FormsHelper from '../../Helper/FormsHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Authentication = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [errorsForm, setErrorsForm] = useState([]);
  const ErrorsForm = () =>
    errorsForm.length > 0
      ?
      errorsForm.map((error, index) => {
        return (
          <label className="text-danger">
            <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="1x"></FontAwesomeIcon>
            <span>{error.message}</span>
          </label>)
      })
      :
      null

  const onChangeEmail = (event) => setEmail(event.target.value)
  const onPassword = (event) => setPassword(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    setErrorsForm([])
    var emailTest = FormsHelper.isEmail(email)
    if (!emailTest) {
      setErrorsForm([{ message: "Email is not valid!", type: "email" }])
    } else {
      Profile.fetchGetProfile(email, password);
      const message = 'email' + email + " password " + password;
      alert(message)
    }

  }
  return (
    <section className="row">
      <div className="col-12 col-lg-4 offset-lg-4">
        <form id="formulaire" onSubmit={onSubmit}>
          <ErrorsForm {...errorsForm} ></ErrorsForm>
          <div className="form-group">
            <label htmlFor="inputEmail" className="w-100 text-left">Identifiant</label>
            <input id="inputEmail" className="form-control" type="email" aria-describedby="emailHelp" placeholder="Votre adresse email ou pseudo" onChange={onChangeEmail} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="w-100 text-left">Mot de passe</label>
            <input className="form-control" id="inputPassword" type="password" placeholder="Votre mot de passe" onChange={onPassword} value={password} />
          </div>
          <button type="submit" className="btn btn-primary">valider</button>
        </form>
        <form className="u-text u-text-default u-title u-text-1" method="post"  >
          <Link to='/resetPassword' className="">Identifiant ou mot de passe oublié?</Link>
         </form>
      </div>
    </section>
  )
};
export default Authentication;