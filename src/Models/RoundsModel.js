import Axios from "axios";
import {makeAutoObservable} from 'mobx';

class RoundsModel {
    urlGetRounds = 'http://localhost:8080/rounds';
    urlAddRound = 'http://localhost:8080/round/add';
    name=''
    _rounds = [];

    constructor(){ 
        this.fetchGetRounds();
        makeAutoObservable(this);
    }
    
    fetchGetRounds(){
        Axios.get(this.urlGetRounds)
        .then((result)=>{
            this._rounds = result.data;
        }
        ).catch();
    }
    fetchAddRound(round){
            Axios.post(this.urlAddRound,round)
            .then((result)=>{
                this._rounds = result.data;
            }
            ).catch();
    }

    get rounds(){
        return this._rounds;
    }
}
export default new RoundsModel();