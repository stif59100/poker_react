import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';
import { GetTokenAxios } from "../Services/TokenService";
console.log(GetTokenAxios)
const GetRoundsRegister = async (id_user, setRoundsRegisterUser) => {
    console.log("je suis la ",id_user)
    return await Axios.get(BackEndRequest.RoundByUser + id_user,GetTokenAxios())
        .then((result) => {
            if (result.status === 200) {
                setRoundsRegisterUser(result.data);
            }
        })
        .catch();
}

const RegisterRound = async (id_round, id_user) => {
    var params = { id_round: id_round, id_user: id_user };
    return await Axios.post(BackEndRequest.RoundRegister, params,GetTokenAxios()).then((result) => {
        if (result.affectedRows === 1) {
            return true;
        }
    })
}

const UnRegisterRound = async (id_round, id_user) => {
    var params = { id_round: id_round, id_user: id_user };
    return await Axios.delete(BackEndRequest.RoundUnRegister, { data: params },GetTokenAxios()).then((result) => {
        if (result.affectedRows === 1) {
            return true;
        }
    }).then((result) => {
        return result;
    })
}

const GetUsersRegisterRound = async (id_round, setPlayers) => {
    await Axios.get(BackEndRequest.UsersByRound + id_round).then((result) => {
        setPlayers(result.data);
    })
}

const UsersToBeOff = async (id_round, id_user) => {
   await Axios.delete(BackEndRequest.RoundUnRegister, { user: id_user, round: id_round }).then((result) => {
        console.log(result.data)
    })
}
const UsersToBeOn = async (id_round, id_user) => {
    console.log(BackEndRequest.RoundRegister + id_round)
    await Axios.post(BackEndRequest.RoundRegister, { user: id_user, round: id_round }).then((result) => {
        console.log(result.data)
    })
}
const UsersToBeEliminate = async (id_round, id_user) => {
    console.log(BackEndRequest.RoundElimnate + id_round)
    await Axios.post(BackEndRequest.RoundElimnate, { user: id_user, round: id_round }).then((result) => {
        console.log(result.data)
    })
}
// eslint-disable-next-line import/no-anonymous-default-export
export {
    GetRoundsRegister,
    UnRegisterRound,
    RegisterRound,
    GetUsersRegisterRound, 
    UsersToBeOff, 
    UsersToBeOn,
    UsersToBeEliminate
}
