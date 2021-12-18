  
import { useState } from "react";
import { observer } from 'mobx-react-lite';
import Profile from '../../Models/Profile';
import FormsHelper from '../../Helper/FormsHelper';


const Authentication = () => {
  const [email,setEmail] = useState()
  const [password,setPassword]= useState()
  const [errorsForm,setErrorsForm]=useState();
  const ErrorsForm = (message)=>(errorsForm !== "")?<label className="">message</label>:null
  const onChangeEmail = (event) => setEmail(event.target.value)
  const onPassword = (event) => setPassword(event.target.value)
  const onSubmit = (event)=>{
    event.preventDefault();
    console.log(email);
    var emailTest = FormsHelper.isEmail(email)
    console.log(emailTest);
    if(!emailTest){
      alert("Email Invalide");
      setErrorsForm("Email is not valid!")
      console.log(errorsForm)
    }else{

      Profile.fetchGetProfile(email,password);
      const message = 'email'+ email +" password " + password;
      alert(message)
    }

  }

  return (
  <section className="u-align-center u-clearfix u-image u-shading u-valign-bottom-xs u-section-1" src=""
    data-image-width="1440" data-image-height="900" id="sec-f665">
    <div className="u-clearfix u-sheet u-sheet-1">
      <form id="formulaire" className="u-text u-text-default u-title u-text-1" method="post"  onSubmit={onSubmit}>
        <div className="u-clearfix u-sheet u-sheet-1">
          <label>Identifiant</label>
          <input className="name" type="text" placeholder="Votre adresse email ou pseudo" onChange={onChangeEmail} value={email}/><br/>
          <label>Mot de passe</label>
          <input className="name" type="password" placeholder="Votre mot de passe" onChange={onPassword} value={password}/><br/>
          <input type="submit" value="Envoyer" />
          <div className="submitForm">Identifiant ou mot de passe oublié?</div>
        </div>
      </form>
      <ErrorsForm message={errorsForm} ></ErrorsForm>
    </div>
  </section>
  )};
  export default Authentication;