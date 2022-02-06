import PlayerRoundsModel from "../../Models/PlayerRoundsModel";

const UserRegisterRound = () => {
    return (

        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
    )
}


const UsersRegisterRound = () => {
    console.log(PlayerRoundsModel.fetchUsers())
    return (
        /*PlayerRoundsModel.fetchUsers().map((user, key) =>
            <UserRegisterRound {...user} key={key} />
        )*/ null
    )

}


const RoundManagement = (props) => {

    return (

        < div className="col-12 p-5">

            <div className="row">
                <div className="col-12">
                    <h1>Informations</h1>
                    <label>Name</label>
                    <label>Max Player</label>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Users</h1>

                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UsersRegisterRound Round={props.Round} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default RoundManagement;