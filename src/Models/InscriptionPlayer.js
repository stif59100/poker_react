import React, { useState } from 'react';
import { useEffect, useRef } from "react";
import { observer } from 'mobx-react-lite';
var resultText = ""

// création de la classe d'inscription d'un utilisateur
class InscriptionPlayer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      nom_utilisateur: "",
      prenom_utilisateur: "",
      pseudo_utilisateur: "",
      email_utilisateur: "",
      mot_de_passe_utilisateur: ""
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
    // url d'accès à la base de données
    let url = "http://localhost:8080/inscription"
// paramètres de la table user
    url += "nom_utilisateur" + this.state.nom_utilisateur
    url += "prenom_utilisateur" + this.state.prenom_utilisateur
    url += "pseudo_utilisateur" + this.state.prenom_utilisateur
    url += "email_utilisateur" + this.state.email_utilisateur
    url += "mot_de_passe_utilisateur" + this.state.mot_de_passe_utilisateur
    fetch(URL)
      .then(response => {

        return response.json()
      })
      .then((result) => {

        // Tableau ordinal contenant 0 ou 1 objet JSON

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
  }; }
  
};

export default InscriptionPlayer;