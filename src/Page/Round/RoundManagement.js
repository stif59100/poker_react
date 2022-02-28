import { useParams } from 'react-router-dom'
import { observer,toJS } from 'mobx';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerByRoundModel from '../../Models/PlayerByRoundModel';
import Round from '../../Models/RoundsModel';
const UserRound = ({ name_user }) => {
    return (

        <tr>
            <td>{name_user}</td>
            <td>{name_user}</td>
            <td>{name_user}</td>
        </tr>
    )
}


const UsersRegisterRound =  (props) => {
    PlayerByRoundModel.fetchUsers(props.Id_Round);

    // Boucle sur la liste des utilisateurs inscrit dans la manche
    return PlayerByRoundModel.UserByRound.map((user, key) => <UserRound {...user} key={key} />)

}


//return null


const RoundManagement =  (props) => {
    const params = useParams();
    //Round.fetchGetRounds()
    let rounds = toJS(Round.rounds)
    let round = rounds.find((round)=>round.id_round == params.id)

    const rights = props.Profile.user.rights;
    console.log(round);
     return (
       (rights.some((right) => right.name_right === "manage_round")) ?
        <section >
            < div className="col-12 p-5 color-gold-light  bg-grey-dark m-2">
                <div className="row">
                    <div className="col-12">
                        <h1>Informations</h1>
                        <div className="table-responsive">
                            <table className="table table-user-information color-gold-light">
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-user  "></span>
                                                Nom
                                            </strong>
                                        </td>
                                        <td className="">
                                            <input type="text" value={round.name_round} >
                                              
                                            </input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-cloud "></span>
                                                date
                                            </strong>
                                        </td>
                                        <td className="">
                                            <input type="text" value={round.date_round}></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-bookmark "></span>
                                                heure
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.hour_round}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Max player
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.max_player}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Points attribués
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.points_attributs}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Ouverte
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.open}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Fermeture
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.close}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Buy-in
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.buy_in}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Rake
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.rake}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Stack
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.stack}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Addon
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.addon}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Rebuy
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.rebuy}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>
                                                <span className="glyphicon glyphicon-eye-open "></span>
                                                Bounty
                                            </strong>
                                        </td>
                                        <td className="">
                                        <input type="text" value={round.bounty}></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
        : <Redirect to="/"></Redirect> 
    )

}
export default RoundManagement;