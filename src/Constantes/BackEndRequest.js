// Class permettant de referencer toutes les urls appeler vers le back end.

const baseUrl = "http://localhost:8080";
const Authentication =    baseUrl + '/authentication';

const Rounds = baseUrl + '/rounds';

const DeleteRound = baseUrl + '/round/deleteRound'

const AddRound = baseUrl + '/round/add';

const Rights = baseUrl + '/rightsByUsers';

const UsersByRound = baseUrl + '/userByRoundId/';

const RoundByUser = baseUrl + "/roundByUserId/";

const RoundRegister = baseUrl + "/roundplayer/register";

const RoundUnRegister = baseUrl + "/roundplayer/unRegister";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

export default {
    Authentication,
    Rounds,
    DeleteRound,
    AddRound,
    Rights,
    UsersByRound,
    RoundByUser,
    RoundRegister,
    RoundUnRegister
}