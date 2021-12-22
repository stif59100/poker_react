import React, { useState } from 'react';
import sha256 from 'sha256';
import { useEffect, useRef } from "react";
import { observer } from 'mobx-react-lite';
var resultText = ""

class Inscription extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name_user: this.props.name_user,
      firstname_user: this.props.firstname_user,
      pseudo_user: this.props.pseudo_user,
      email_user: this.props.email_user,
      password_user: this.props.password_user
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

    var user = { "name_user" : this.state.name_user,
    "firstname_user" : this.state.firstname_user,
     "pseudo_user" : this.state.pseudo_user,
    "email_user" : this.state.email_user,
     "password_user" : sha256(this.state.password_user) }
    var data = {
      method : "POST",
      body: JSON.stringify(user), 
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
  }
    console.log(user)
    fetch(url,data)
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
      <section className="u-align-center u-clearfix u-image u-shading u-valign-bottom-xs u-section-1" src=""
        data-image-width="1440" data-image-height="900" id="sec-f665">
        <div className="u-clearfix u-sheet u-sheet-1">
          <form id="formulaire" className="u-text u-text-default u-title u-text-1" method="get" onSubmit={this.handleSubmit}>
            <div className="u-clearfix u-sheet u-sheet-1">
              <label>name</label>
              <input name="name_user"className="name" type="text" placeholder="Saisissez votre name" onChange={this.handleChange.bind(this.name_user)} value={this.name_user}/><br />
              <label>Préname</label>
              <input name="firstname_user"className="name" type="text" placeholder="Saisissez votre préname" onChange={this.handleChange.bind(this)}/><br />
              <label>Pseudo</label>
              <input name="pseudo_user"className="name" type="text" placeholder="Choisissez votre pseudo" onChange={this.handleChange.bind(this)} value={this.pseudo_user}/><br />
              <label>Votre adresse email</label>
              <input name="email_user"className="name" type="text" placeholder="Saisissez votre email" value={this.email_user} onChange={this.handleChange.bind(this)}/><br />
              <input className="name" type="text" placeholder="Saisissez votre email une seconde fois"/><br />
              <label>Mot de passe</label>
              <input name="password_user"className="name" type="password" placeholder="Saisissez votre mot de passe" onChange={this.handleChange.bind(this)} value={this.password_user} /><br />
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