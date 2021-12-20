import React, { useState } from 'react';

import { useEffect, useRef } from "react";
import { observer } from 'mobx-react-lite';
var resultText = ""

class Inscription extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nom_utilisateur: this.props.nom_utilisateur,
      prenom_utilisateur: this.props.prenom_utilisateur,
      pseudo_utilisateur: this.props.pseudo_utilisateur,
      email_utilisateur: this.props.email_utilisateur,
      mot_de_passe_utilisateur: this.props.mot_de_passe_utilisateur
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    console.clear()
    const name = event.target.name
    const value = event.target.value
    console.log("name : " + name)
    console.log("value : " + value)
    this.setState({
        [name]: value /// Pour faire du générique
    })
    
} /// handleChange
  handleSubmit = (event) => {
    event.preventDefault();
    let url = "http://localhost:8080/register"
    url += "?nom_utilisateur=" + this.state.nom_utilisateur
    url += "&prenom_utilisateur=" + this.state.prenom_utilisateur
    url += "&pseudo_utilisateur=" + this.state.prenom_utilisateur
    url += "&email_utilisateur=" + this.state.email_utilisateur
    url += "&mot_de_passe_utilisateur=" + this.state.mot_de_passe_utilisateur
    fetch(url)
      .then(response => {
        console.log(response.json())
        return response.json()
      })
      .then((result) => {
        console.log(result)
        // Tableau ordinal contenant 0 ou 1 objet JSON
        alert(url)
        if (result.affectedRows == 1) {
          resultText = "Vous êtes inscrit !"
        } else {
          resultText = result[0]
        }

        this.setState({ message: resultText })
      },
        (error) => {
          // Erreur HTTP
          console.log(error)
        }
      )
      
  };
  render(){
    return (
      <section className="row register">
        <div className="u-clearfix u-sheet u-sheet-1">
          <form id="formulaire" className="u-text u-text-default u-title u-text-1" method="get" onSubmit={this.handleSubmit}>
            <div className="u-clearfix u-sheet u-sheet-1">
              <label>Nom</label>
              <input name="nom_utilisateur"className="name" type="text" placeholder="Saisissez votre nom" onChange={this.handleChange.bind(this.nom_utilisateur)} value={this.nom_utilisateur}/><br />
              <label>Prénom</label>
              <input name="prenom_utilisateur"className="name" type="text" placeholder="Saisissez votre prénom" onChange={this.handleChange.bind(this)}/><br />
              <label>Pseudo</label>
              <input name="pseudo_utilisateur"className="name" type="text" placeholder="Choisissez votre pseudo" onChange={this.handleChange.bind(this)} value={this.pseudo_utilisateur}/><br />
              <label>Votre adresse email</label>
              <input name="email_utilisateur"className="name" type="text" placeholder="Saisissez votre email" value={this.email_utilisateur} onChange={this.handleChange.bind(this)}/><br />
              <input className="name" type="text" placeholder="Saisissez votre email une seconde fois"/><br />
              <label>Mot de passe</label>
              <input name="mot_de_passe_utilisateur"className="name" type="password" placeholder="Saisissez votre mot de passe" onChange={this.handleChange.bind(this)} value={this.mot_de_passe_utilisateur} /><br />
              <input className="name" type="password" placeholder="Confirmez votre mot de passe" /><br />
              <input type="submit" value="Envoyer" onChange={this.handleChange.bind(this)}/>
              <div className="submitForm">Identifiant ou mot de passe oublié?</div>
            </div>
          </form>
  
        </div>
      </section>
    )
  }
  
};

export default Inscription;