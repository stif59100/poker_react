import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { HaveRight } from '../../Services/UserService';
import { ManageRoundRight } from '../../Constantes/Right';
import RoundsContext from '../../Context/RoundsContext';
import { GetUsersRegisterRound } from "../../Services/PlayerRoundsService"
import FormUpdateRound from "./FormUpdateRound";
import { UpdateRound } from "../../Services/RoundsService";
import {
    UsersToBeOff,
    UsersToBeOn
} from "../../Services/PlayerRoundsService"
// ligne d'un utilisateur inscrit au tournois.
const UserRound = (props) => {
    const { id_user, name_user, firstname_user, pseudo_user } = props.user;
    const handleUsersToBeOn = () => {
        UsersToBeOff(props.round.id_round ,id_user)
    }
    const handleUsersToBeOff = () => {
        UsersToBeOff(props.round.id_round ,id_user)
    }
    const handleUsersToBeRefused = () => {
        
    }

    return (
        <tr>
            <td>{name_user}</td>
            <td>{firstname_user}</td>
            <td>{pseudo_user}</td>
            <td>
                <button className='btn-gold-light' onClick={handleUsersToBeOn}>Présent</button>
                <button className='btn-gold-light' onClick={handleUsersToBeOff}>Absent</button>
                <button className='btn-gold-light'  onClick={handleUsersToBeRefused}>Refuser</button>
            </td>
        </tr>
    )
}


// boucle sur la liste des utilisateurs inscrit au tournois afin de les afficher individuelllement par ligne
const UsersRegisterRound = (props) => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        GetUsersRegisterRound(props.round.id_round, setPlayers)
    }, [props.round.id_round, setPlayers]);
    console.log(players)
    // Boucle sur la liste des utilisateurs inscrit dans la manche
    return players.map((user, key) => <UserRound {...props} {...user} key={key} />)

}



// La partie quie affiche la listes des utilisateurs inscrits 
const UsersRegisterRoundContainer = (props) => {
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
                <UsersRegisterRound {...props} />
            </tbody>
        </table>
    )
}


// affiche l'ensemble de gestion d'un tournois ainsi que la liste des inscrits
// atttention l'utilisateur doit avoir le droit de gestion d'un tournois 
// si l'utilisateur ne dipose pas du droit il est rediriger sur la page accueil
const RoundManagement = () => {
    const params = useParams();

    const { rounds } = useContext(RoundsContext);
    const [round, setRound] = useState(rounds.find((element, index) => { console.log(element.id_round); return element.id_round == params.id }));
    const handleUpdateRounds = () => {
        console.log("je suis dans click update")
        UpdateRound(round)
    }

    return (
        (HaveRight(ManageRoundRight) && round) ?
            <section >
                < div className="col-12 p-5 color-gold-light  bg-grey-dark m-2">
                    <div className="row">
                        <div className='col-1 offset-11'>
                            <button onClick={handleUpdateRounds} className='btn btn-grey-light'>Save</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h1>Informations</h1>
                            <FormUpdateRound round={round} setRound={setRound} ></FormUpdateRound>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h1>Joueurs inscrits</h1>
                            <UsersRegisterRoundContainer round={round} />
                        </div>
                    </div>
                </div>
            </section>
            : <Redirect to="/"></Redirect>
    )

}
export default RoundManagement;