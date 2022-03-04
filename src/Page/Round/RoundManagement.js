import { useParams } from 'react-router-dom'
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerByRoundModel from '../../Models/PlayerByRoundModel';
import RoundsModel from '../../Models/RoundsModel';
import { useState, useEffect } from 'react';



// ligne d'un utilisateur inscrit au tournois.
const UserRound = ({ name_user, firstname_user, pseudo_user }) => {
    return (

        <tr>
            <td>{name_user}</td>
            <td>{firstname_user}</td>
            <td>{pseudo_user}</td>
            <td>
                <button className='btn-gold-light'>Présent</button>
                <button className='btn-gold-light'>Absent</button>
                <button className='btn-gold-light'>Refuser</button>
            </td>
        </tr>
    )
}


// boucle sur la liste des utilisateurs inscrit au tournois afin de les afficher individuelllement par ligne
const UsersRegisterRound = (props) => {
    const [players, setPlayers] = useState([]);
    useEffect(async () => {
        if(players.length === 0 ){
            await PlayerByRoundModel.fetchUsers(props.Id_Round);
            setPlayers(PlayerByRoundModel.UserByRound)
        }
    })
    // Boucle sur la liste des utilisateurs inscrit dans la manche
    return players.map((user, key) => <UserRound {...user} key={key} />)

}

// affiche les informations du formulaire pour le tournois
const FormPropertiesRound = (props) => {
    console.log(props.IdRound);
    const [round, setRound] = useState(null);
    const [rounds, setRounds] = useState([]);
    useEffect(() => {
        if (!round) {
            setRounds(toJS(RoundsModel.rounds));
            setRound(rounds.find((round) => round.id_round == props.IdRound));
        }
    });
    return (
        (!round) ? null :
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
    )
}


// La partie quie affiche la listes des utilisateurs inscrits 
const UsersRegisterRoundContainer = observer((props) => {
    return (
        <table className="table color-gold-light">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prénom</th>
                    <th scope="col">Pseudo</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody>
                <UsersRegisterRound Id_Round={props.IdRound} />
            </tbody>
        </table>
    )
})


// affiche l'ensemble de gestion d'un tournois ainsi que la liste des inscrits
// atttention l'utilisateur doit avoir le droit de gestion d'un tournois 
// si l'utilisateur ne dipose pas du droit il est rediriger sur la page accueil
const RoundManagement = (props) => {
    const params = useParams();
    const rights = props.Profile.user.rights;
    return (
        (rights.some((right) => right.name_right === "manage_round")) ?
            <section >
                < div className="col-12 p-5 color-gold-light  bg-grey-dark m-2">
                    <div className="row">
                        <div className="col-6">
                            <h1>Informations</h1>
                            <FormPropertiesRound IdRound={params.id} ></FormPropertiesRound>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h1>Joueurs inscrits</h1>
                            <UsersRegisterRoundContainer IdRound={params.id} />
                        </div>
                    </div>
                </div>
            </section>
            : <Redirect to="/"></Redirect>
    )

}
export default RoundManagement;