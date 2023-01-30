import Axios from "axios";
import BackEndRequest from '../Constantes/BackEndRequest';

const GetRoundsRegister = async (id_user, setRoundsRegisterUser) => {
    return await Axios.get(BackEndRequest.RoundByUser + id_user)
        .then((result) => {
            setRoundsRegisterUser(result.data);
        })
        .catch();
}
const RegisterRound = async (id_round, id_user) => {
    var params = { id_round: id_round, id_user: id_user };
    return await Axios.post(BackEndRequest.RoundRegister, params).then((result) => {
        if (result.affectedRows === 1) {
            return true;
        }
    })
}
const UnRegisterRound = async (id_round, id_user) => {
    var params = { id_round: id_round, id_user: id_user };
    return await Axios.delete(BackEndRequest.RoundUnRegister, { data: params }).then((result) => {
        if (result.affectedRows === 1) {
            return true;
        }
    }).then((result) => {
        return result;
    })
}

const GetUsersRegisterRound = async (id_round, setPlayers) => {
    console.log(BackEndRequest.UsersByRound + id_round)
    await Axios.get(BackEndRequest.UsersByRound + id_round).then((result) => {
        console.log(result.data)
        setPlayers(result.data);
    })
}
const UsersToBeOff = async (id_round, setPlayers) => {
    console.log(BackEndRequest.UsersByRound + id_round)
    await Axios.get(BackEndRequest.UsersByRound + id_round).then((result) => {
        console.log(result.data)
    })
}
const UsersToBeOn = async (id_round, id_user) => {
    console.log(BackEndRequest.UsersByRound + id_round)
    await Axios.post(BackEndRequest.UsersByRound, { user: id_user, round: id_round }).then((result) => {
        console.log(result.data)
    })
}
const UsersToBeRefused = async (id_round, id_user) => {
    console.log(BackEndRequest.UsersByRound + id_round)
    await Axios.post(BackEndRequest.UsersByRound, { user: id_user, round: id_round }).then((result) => {
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
    UsersToBeRefused
}
