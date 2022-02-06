import Axios from "axios";
import { makeAutoObservable } from 'mobx';

class Rights
{
    _urlRights = 'http://localhost:8080/rightsByUsers';
    constructor() {
        makeAutoObservable(this);     
    }
    async fetchGetRights(user_id){
        var data = {id_user:user_id};
        return await Axios.post(this._urlRights,data)
        .then((response) => {
            return  response.data
        })
        .then((rights)=>{
            return  rights;
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}

export default new Rights();