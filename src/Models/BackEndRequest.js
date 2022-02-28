class BackEndRequest {
    _baseUrl = "http://localhost:8080";
    get Authentication() {
        return this._baseUrl + '/authentication';
    }
    get GetRounds() {
        return this._baseUrl + '/rounds';
    }
    get deleteRound(){
        return this._baseUrl + '/round/deleteRound'
    }
    get AddRound() {
        return this._baseUrl + '/round/add';
    }
    get Rights() {
        return this._baseUrl + '/rightsByUsers';
    }
    get UsersByRound() {
        return this._baseUrl + '/roundByRoundId/';
    }
    get RoundByUser() {
        return this._baseUrl + "/roundByUserId/";
    }
    get RoundRegister() {
        return this._baseUrl + "/roundplayer/register";
    }
    get RoundUnRegister() {
        return this._baseUrl + "/roundplayer/unRegister";
    }
}
export default new BackEndRequest();