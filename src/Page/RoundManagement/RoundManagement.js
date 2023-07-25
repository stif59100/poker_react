import { useParams } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect, useCallback } from 'react';
import { useContext } from 'react';
import RoundsContext from '../../Context/RoundsContext';
import { HaveRight } from '../../Services/UserService';
import { ManageRoundRight } from '../../Constantes/Right';
import { GetUsersRegisterRound, UsersToBeOff, UsersToBeOn,UsersToBeEliminate } from "../../Services/PlayerRoundsService"
import FormUpdateRound from "./FormUpdateRound";
import { UpdateRound } from "../../Services/RoundsService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// ligne d'un utilisateur inscrit au tournois.

const UserRegisterForRound = (props) => {
    console.log(props)
    return (
        <tr>
            <td>{props.name_user}</td>
            <td>{props.firstname_user}</td>
            <td>{props.pseudo_user}</td>
            <td>
                {(props.present)?
                <FontAwesomeIcon icon={["fa", "thumbs-down"]} size="1x"></FontAwesomeIcon>
                :
                <FontAwesomeIcon icon={["fa", "thumbs-up"]} size="1x"></FontAwesomeIcon>
                }
            </td>
            <td>
                <button className='btn-gold-light' onClick={props.handleUsersToBeOn}>Présent</button>
                <button className='btn-gold-light' onClick={props.handleUsersToBeOff}>Absent</button>
                <button className='btn-gold-light' onClick={props.handleUsersEliminate}>Elimier</button>
            </td>
        </tr>
    )
}


// boucle sur la liste des utilisateurs inscrit au tournois afin de les afficher individuelllement par ligne
const UsersRegisterRound = (props) => {
    console.log(props)
    const [players, setPlayers] = useState([]);
    const handleUsersToBeOn = () => {
        UsersToBeOn(props.round.id_round ,props.id_user)
    }
    const handleUsersToBeOff = useCallback(() => {
        UsersToBeOff(props.round.id_round ,props.id_user)
    },[])
    const handleUsersEliminate= useCallback(() => {
        UsersToBeEliminate(props.round.id_round ,props.id_user)
    },[])

    useEffect(() => {
        console.log('useeffect isersregister')
            GetUsersRegisterRound(props.round.id_round, setPlayers)
    }, [props.round.id_round, setPlayers, handleUsersToBeOff]);

    // Boucle sur la liste des utilisateurs inscrit dans la manche
    return players.map((user, key) =>
        <UserRegisterForRound
        {...props}
        {...user}
        key={key}
        handleUsersEliminate={handleUsersEliminate}
        handleUsersToBeOff={handleUsersToBeOff}
        handleUsersToBeOn={handleUsersToBeOn} />)

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
                    <th scope="col">Présence</th>
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
    const [round, setRound] = useState(rounds.find((element, index) => element.id_round == params.id));
    const handleUpdateRounds = () => {
        UpdateRound(round)
    }

    return (
        (HaveRight(ManageRoundRight) && round) ?
            <section >
                < div className="col-12 p-5 color-gold-light  bg-grey-dark m-2">
                    <div className="row">
                        <div className='col-2 offset-10'>
                                <Link to = "/Rounds" className='btn btn-grey-light'>
                                    Return
                              </Link>
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