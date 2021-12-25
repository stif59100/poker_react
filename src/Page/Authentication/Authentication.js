import { useEffect, useState } from "react";
import FormsHelper from '../../Helper/FormsHelper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { observer } from "mobx-react-lite";


const ErrorsForm = (ErrorsForm) =>
  ErrorsForm.length > 0
    ?
    ErrorsForm.map((error, index) => {
      return (
        <label className="text-danger">
          <FontAwesomeIcon icon={["fas", "exclamation-triangle"]} size="1x"></FontAwesomeIcon>
          <span>{error.message}</span>
        </label>)
    })
    :
    null

const Forms = observer((props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorsForm, setErrorsForm] = useState([]);
  const onChangeEmail = (event) => setEmail(event.target.value)
  const onPassword = (event) => setPassword(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();
    setErrorsForm([])
    var emailTest = FormsHelper.isEmail(email)
    if (!emailTest) {
      setErrorsForm([{ message: "Email is not valid!", type: "email" }])
    } else {

      if(!props.Profile.loggedIn){
        console.log("notlogged")
        props.Profile.fetchGetProfile(email, password);
      }
    }
  }
  return (
    <section className="row authentication" >
      <div className="col-12 col-lg-6 offset-lg-3">
        <form onSubmit={onSubmit}>
          <ErrorsForm {...errorsForm} ></ErrorsForm>
          <div className="form-group">
            <label htmlFor="inputEmail" className="w-100 text-left color-gold-light">Identifiant</label>
            <input id="inputEmail" className="form-control input-grey-light" type="email" aria-describedby="emailHelp" placeholder="Votre adresse email ou pseudo" onChange={onChangeEmail} value={email} />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="w-100 text-left color-gold-light">Mot de passe</label>
            <input className="form-control input-grey-light" id="inputPassword" type="password" placeholder="Votre mot de passe" onChange={onPassword} value={password} />
          </div>
          <button type="submit" className="btn btn-gold-light">valider</button>
        </form>
        <Link to='/resetPassword' className="color-gold-light">Identifiant ou mot de passe oublié?</Link>
      </div>
    </section>)
})
const Authentication = observer((props) => {


  useEffect(()=>{
  console.log("use efect");
  console.log(props.Profile.loggedIn);
  })

  return (
    (props.Profile.loggedIn) ?
      <Redirect to='/'></Redirect>
      : <Forms Profile={props.Profile} ></Forms>
  )
});
export default Authentication;