import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import BackEndRequest from './BackEndRequest';
class Rights
{
    _rights =  [];
    constructor() {
        makeAutoObservable(this);     
    }
    async fetchGetRights(user_id){
        var data = {id_user:user_id};
        return await Axios.post(BackEndRequest.Rights,data)
        .then((response) => {
            return  response.data;
        })
        .then((rights)=>{
            this._rights = rights;
            return  rights;
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    get rights(){
        return this._rights;
    }
}

export default new Rights();