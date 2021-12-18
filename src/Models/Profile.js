import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import { sha256 } from "sha256";

class Profile 
{

    url = 'http://localhost:8080/joueurmancheparmanche/';
    _firstName = "";
    _lastName = "";
    _email = "";

    constructor() {
        makeAutoObservable(this);
    }

    fetchGetProfile(email, password) {
        var passwordHash = sha256(password);
        var userBeforeAuth = { email: email, password: passwordHash }
        Axios.post(this.urlbymanche, userBeforeAuth)
            .then((result) => {
                this._firstName = result.firstName;
                this._lastName = result.lastName;
                this._email = result.email;
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
        this.email=value;
    }
}

export default new Profile();