import PlayerRoundsModel from "../../Models/PlayerRoundsModel";
import {  useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite';


const UserRound = ({ name_user }) => {
    return (

        <tr>
            <td>{name_user}</td>
            <td>{name_user}</td>
            <td>{name_user}</td>
        </tr>
    )
}


const UsersRegisterRound = observer((props) => {
    // console.log(PlayerRoundsModel.fetchUsers())
    //let rounds = PlayerRoundsModel.UserByRound;
    console.log("je suis la")
    //console.log(rounds)
    return null //  rounds.map((user, key) => <UserRound {...user} key={key} />)

})


//return null


const RoundManagement = (props) => {
    const params = useParams()
    return (
        <section >
            < div className="col-12 p-5 color-gold-light  bg-grey-dark m-2">
                <div className="row">
                    <div className="col-12">
                        <h1>Informations</h1>
                        <label>Nom de la manche</label>
                        <label>Date</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1>Joueurs inscrits</h1>

                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prénom</th>
                                    <th scope="col">Pseudo</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UsersRegisterRound Id_Round={params.id} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default RoundManagement;