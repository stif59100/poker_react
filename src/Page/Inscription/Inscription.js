import React, { useState } from 'react';
import { useEffect, useRef } from "react";
import { observer } from 'mobx-react-lite';



const Inscription = () => {
  const submit = (event)=>{
    event.preventDefault();
    alert('inscription ok')
  }
  return (
    <section className="col-12">
    <div className="u-clearfix u-sheet u-sheet-1">
      <form id="formulaire" className="u-text u-text-default u-title u-text-1" method="get" onSubmit={submit} >
        <div className="u-clearfix u-sheet u-sheet-1">
          <label>Nom</label>
          <input className="name" type="text" placeholder="Saisissez votre nom" /><br />
          <label>Prénom</label>
          <input className="name" type="text" placeholder="Saisissez votre prénom" /><br />
          <label>Pseudo</label>
          <input className="name" type="text" placeholder="Choisissez votre pseudo" /><br />
          <label>Votre adresse email</label>
          <input className="name" type="text" placeholder="Saisissez votre email"/><br />
          <input className="name" type="text" placeholder="Saisissez votre email"/><br />
          <label>Mot de passe</label>
          <input className="name" type="password" placeholder="Saisissez votre mot de passe"  /><br />
          <input className="name" type="password" placeholder="Confirmez votre mot de passe" /><br />
          <input type="submit" value="Envoyer" />
          <div className="submitForm">Identifiant ou mot de passe oublié?</div>
        </div>
      </form>

    </div>
  </section>
  )};
export default Inscription;