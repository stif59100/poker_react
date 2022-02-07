import Axios from "axios";
import {makeAutoObservable} from 'mobx';
import { element } from "prop-types";

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
            //this._rounds = result.data;
            result.data.forEach(element =>{
             this._rounds.push(this.daoToDto(element))   
            });
            console.log(this._rounds)
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
    daoToDto (dao){
        let dto = {
            id_round : dao.id_round, 
            name_round: dao.name_round,
            points_attributs: dao.points_attributs,
            open: dao.open,
            close: dao.open,
            max_player: dao.max_player,
            buy_in: dao.buy_in,
            rake : dao.rake,
            stack : dao.stack,
            addon: dao.addon,
            rebuy: dao.rebuy,
            bounty: dao.bounty,
            date_round: new Date(dao.date_round).toLocaleDateString(),
            hour_round: dao.hour_round,
        }
        return dto;
    }
}
export default new RoundsModel();