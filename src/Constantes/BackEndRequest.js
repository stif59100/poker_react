// Class permettant de referencer toutes les urls appeler vers le back end.

const baseUrl = "https://localhost:44363/api/";

const Authentication =    baseUrl + 'Account/Login';

const Rounds = baseUrl + 'Rounds';

const DeleteRound = baseUrl + 'Round/DeleteRound'

const AddRound = baseUrl + 'Round/Add';

const Rights = baseUrl + 'Rights';

const RightsByUser = baseUrl + 'UserRights/';

const UsersByRound = baseUrl + 'userByRoundId/';

const RoundByUser = baseUrl + "RoundPlayer/";

const RoundRegister = baseUrl + "RoundPlayer/register";

const RoundUnRegister = baseUrl + "RoundPlayer/unRegister";

const RoundElimnate = baseUrl + "RoundPlayer/eliminate";

const Register = baseUrl + "Account/Register";

const GetChampionShips = baseUrl + "Championships/GetAll";

const ChampionShipAdd = baseUrl + "Championship/add";

const GetUsers = baseUrl + "Users"

const GetUserById = baseUrl + "User/"

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    Authentication,
    Rounds,
    DeleteRound,
    AddRound,
    Rights,
    RightsByUser,
    UsersByRound,
    RoundByUser,
    RoundRegister,
    RoundUnRegister,
    Register,
    GetChampionShips,
    ChampionShipAdd,
    GetUsers,
    GetUserById,
    RoundElimnate
}