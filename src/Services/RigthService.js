
import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';

export const GetUsers = async (id_round) => {
    await Axios.get(BackEndRequest.UsersByRound + id_round)
        .then((result) => {
            return result;
        }).then((result) => {
            this._userByRound = result.data
            return this._userByRound;
        })
        .catch();
}

export const GetRights = async (user_id) => {
    var data = { id_user: user_id };
    return await Axios.post(BackEndRequest.Rights, data)
        .then((response) => {
            return response.data;
        })
        .then((rights) => {
            return rights;
        })
        .catch(function (error) {
            console.log(error);
        });
}
