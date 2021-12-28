import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import  sha256  from "sha256";

class Profile 
{
    _urlAuthentication = 'http://localhost:8080/authentication';
    _urlRights = 'http://localhost:8080/';
    _id=0;
    _firstName = "";
    _lastName = "";
    _email = "";
    _rights = [];
    _loggedIn = false;
    constructor() {
        makeAutoObservable(this);
    }


    fetchGetRights(){
        var data = {id_user:this._id};
        Axios.post(this._urlRights,data)
        .then((response) => {
            return response.data
        }).then((rights)=>{
            this._rights = rights;
            this.fetchGetRights();
             })
        .catch(function (error) {
            console.log(error);
        });

    }

    fetchGetProfile(email, password) {
        var passwordHash = sha256(password);
        var userBeforeAuth = { email: email, password: passwordHash }
        Axios.post(this._urlAuthentication, userBeforeAuth)
            .then((response) => {
                return response.data
            }).then((user)=>{
                this._firstName = user.firstname_user;
                this._lastName = user.name_user;
                this._email = user.email_user;
                this._id =  user.id_user;
                this._loggedIn = true;
                this.fetchGetRights();
                 })
            .catch(function (error) {
                console.log(error);
            });
    }

    get firstName() {
        return this._firstName;
    }
    set lastName(value){
        this._lastName = value;
    }
    get lastName(){
        return this._lastName;
    }
    get email(){
        return this._email;
    }
    get id(){
        return this._id;
    }

    get loggedIn(){
        return this._loggedIn;
    }
}

export default new Profile();