import React, { useState } from 'react';
import sha256 from 'sha256';
import Axios from 'axios';

// formulaire permettant l'inscription sur le site internet.
const Register = () => {
  const [name_user, SetNameUser] = useState();
  const [firstname_user, SetFirstnameUser] = useState();
  const [pseudo_user, SetPseudoUser] = useState();
  const [email_user, SetEmailUser] = useState();
  const [password_user, SetPasswordUser] = useState();
  const [confirmPasswordUser, SetConfirmPasword] = useState();
  const [passwdIsVisible, SetPasswdIsVisible] = useState();

  const handleChangeName = (event) => {
    SetNameUser(event.target.value)
  }
  const handleChangeFirstName = (event) => {
    SetFirstnameUser(event.target.value)
  }
    const handleChangePseudo = (event) => {
      SetPseudoUser(event.target.value)
    }
    const handleChangeEmail = (event) => {
      SetEmailUser(event.target.value)
    }
    const handleChangePassword = (event) => {
      SetPasswordUser(event.target.value)
    }
    const handleChangeConfirmPassword = (event) => {
      SetConfirmPasword(event.target.value)
    }
    const handleVisiblePasswd = ()=> {
      console.log('ca marche')
      SetPasswdIsVisible(!passwdIsVisible)
      console.log(passwdIsVisible)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let url = "http://localhost:8080/register"

      var user = {
        "name_user": name_user,
        "firstname_user": firstname_user,
        "pseudo_user": pseudo_user,
        "email_user": email_user,
        "password_user": sha256(password_user)
      }

      Axios.post(url, user)
        .then((result) => {
          let resultText = "";

          // Tableau ordinal contenant 0 ou 1 objet JSON
          if (result.affectedRows == 1) {
            resultText = "Vous êtes inscrit !"
          } else {
            resultText = result[0]
          }
        },
          (error) => {
            // Erreur HTTP
            console.log(error)
          }
        )

    }

    return (
      <section className="row register">
        <div className="col-12 col-lg-6 offset-lg-3">
          <form id="formulaire" className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameImput" className="w-100 text-left color-gold-light">Nom</label>
              <input name="name_user" className="form-control input-grey-light" id="nameImput" type="text" placeholder="Saisissez votre nom" onChange={handleChangeName} value={name_user} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Prénom</label>
              <input name="firstname_user" className="form-control input-grey-light" type="text" placeholder="Saisissez votre prénom" onChange={handleChangeFirstName} value={firstname_user} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Pseudo</label>
              <input name="pseudo_user" className="form-control input-grey-light" type="text" placeholder="Choisissez votre pseudo" onChange={handleChangePseudo} value={pseudo_user} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Votre adresse email</label>
              <input name="email_user" className="form-control input-grey-light" type="text" placeholder="Saisissez votre email" value={email_user} onChange={handleChangeEmail} />

              <input className="form-control input-grey-light" type="text" placeholder="Confirmez votre email" />
            </div>

            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Mot de passe</label>
              {
              (!passwdIsVisible)?
                <div>
                  <input name="password_user" className="form-control input-grey-light" type="password" placeholder="Saisissez votre mot de passe" onChange={handleChangePassword} value={password_user} />
                  <input className="form-control input-grey-light" type="password" placeholder="Confirmez votre mot de passe" onChange={handleChangeConfirmPassword} value={confirmPasswordUser} />
                </div>
                : 
                <div>
                  <input className="form-control input-grey-light" id="inputVisible" type="text" required placeholder="Votre mot de passe" onChange={handleChangePassword} value={password_user} />
                  <input className="form-control input-grey-light" id="inputVisible" type="text" required placeholder="Votre mot de passe" onChange={handleChangeConfirmPassword} value={confirmPasswordUser} />
                </div>
                }
              <label for="chkVisibility" id='lblVisible'>Mot de passe visible</label>
              <input type="checkbox" id='chkVisibilite' onChange={handleVisiblePasswd} />
            </div>
            <button type="submit" className="btn btn-gold-light" >valider</button>
          </form>
        </div>
      </section>
    )
};

export default Register;