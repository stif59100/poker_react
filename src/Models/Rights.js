import Axios from "axios";
import { makeAutoObservable } from 'mobx';
import BackEndRequest from './BackEndRequest';
class Rights
{
    constructor() {
        makeAutoObservable(this);     
    }
    async fetchGetRights(user_id){
        var data = {id_user:user_id};
        return await Axios.post(BackEndRequest.Rights,data)
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