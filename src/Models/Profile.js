import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import  sha256  from "sha256";

class Profile 
{
    url = 'http://localhost:8080/authentication';
    _firstName = "";
    _lastName = "";
    _email = "";
    _loggedIn = false;
    constructor() {
        makeAutoObservable(this);
    }

    fetchGetProfile(email, password) {
        var passwordHash = sha256(password);
        var userBeforeAuth = { email: email, password: passwordHash }
        Axios.post(this.url, userBeforeAuth)
            .then((response) => {
                return response.data
            }).then((user)=>{
                this._firstName = user.firstname_user;
                this._lastName = user.name_user;
                this._email = user.email_user;
                this._loggedIn = true;
                 })
            .catch(function (error) {
                console.log(error);
            });
    }

    set firstName(value){
        this._firstName=value;
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
    set email(value){
        this._email=value;
    }
    get email(){
        return this._email;
    }
    get loggedIn(){
        return this._loggedIn;
    }
}

export default new Profile();