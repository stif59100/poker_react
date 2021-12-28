import React, { useState } from 'react';
import sha256 from 'sha256';
import { useEffect, useRef } from "react";
import { observer } from 'mobx-react-lite';
var resultText = ""

class Register extends React.Component {
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

    var user = {
      "name_user": this.state.name_user,
      "firstname_user": this.state.firstname_user,
      "pseudo_user": this.state.pseudo_user,
      "email_user": this.state.email_user,
      "password_user": sha256(this.state.password_user)
    }
    var data = {
      method: "POST",
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods':"POST"
      }
    }
    console.log(user)
    fetch(url, data)
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
  render() {
    return (
      <section className="row register">
        <div className="col-12 col-lg-6 offset-lg-3">
          <form id="formulaire" className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="nameImput" className="w-100 text-left color-gold-light">Nom</label>
              <input name="name_user" className="form-control input-grey-light" id="nameImput" type="text" placeholder="Saisissez votre nom" onChange={this.handleChange.bind(this.name_user)} value={this.name_user} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Prénom</label>
              <input name="firstname_user" className="form-control input-grey-light" type="text" placeholder="Saisissez votre prénom" onChange={this.handleChange.bind(this)} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Pseudo</label>
              <input name="pseudo_user" className="form-control input-grey-light" type="text" placeholder="Choisissez votre pseudo" onChange={this.handleChange.bind(this)} value={this.pseudo_user} />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Votre adresse email</label>
              <input name="email_user" className="form-control input-grey-light" type="text" placeholder="Saisissez votre email" value={this.email_user} onChange={this.handleChange.bind(this)} />
              <input className="form-control input-grey-light" type="text" placeholder="Confirmez votre email" />
            </div>
            <div className="form-group">
              <label className="w-100 text-left color-gold-light">Mot de passe</label>
              <input name="password_user" className="form-control input-grey-light" type="password" placeholder="Saisissez votre mot de passe" onChange={this.handleChange.bind(this)} value={this.password_user} />
              <input className="form-control input-grey-light" type="password" placeholder="Confirmez votre mot de passe" />
            </div>
            <button type="submit" className="btn btn-gold-light" >valider</button>
          </form>
        </div>
      </section>
    )
  }

};

export default Register;