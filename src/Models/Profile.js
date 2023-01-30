
class Profile {
    _loggedIn = false;
    _id = null;
    _lastName = null;
    _firstName = null;
    _email = null;
    _pseudo = null;
    _rights = [];
    _rounds = [];
    
    get loggedIn() {
        return this._loggedIn;
    }

    get id() {
        return this._id;
    }
    get login() {
        return this._pseudo;
    }
    get firstName() {
        return this._firstName;
    }
    get email() {
        return this._email;
    }
    get lastName() {
        return this._lastName;
    }
    get rights() {
        return this._rights;
    }
    get rounds() {
        return this._rounds;
    }
    get pseudo() {
        return this._pseudo;
    }
    HaveRight(right){
        this._rights.some((currentRight)=>currentRight.name === right);
    }
}
export default Profile;