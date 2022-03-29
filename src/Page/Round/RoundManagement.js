import { useParams } from 'react-router-dom'
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import PlayerByRoundModel from '../../Models/PlayerByRoundModel';
import RoundsModel from '../../Models/RoundsModel';
import { useState, useEffect } from 'react';
import Rights from '../../Models/Rights';



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
        setPlayers(PlayerByRoundModel.UserByRound)
    })
    // Boucle sur la liste des utilisateurs inscrit dans la manche
    return players.map((user, key) => <UserRound {...user} key={key} />)

}

// affiche les informations du formulaire pour le tournois
const FormPropertiesRound = (props) => {
    useEffect(()=>{
        if(props.roundProperties){
            setName(props.roundProperties.name_round)
        }
    
    })
    console.log(props.roundProperties)
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const [points_attributs, setPointAttributs] = useState(1);
    const [maxPlayer, setMaxPlayer] = useState(1);
    const [buyIn, setBuyIn] = useState(1);
    const [rake, setRake] = useState(1);
    const [stack, setStack] = useState(1);
    const [addon, setAddon] = useState(1);
    const [rebuy, setRebuy] = useState(1);
    const [bounty, setBounty] = useState(1);
    const [addSuccess, setAddSuccess] = useState(false)
    const changeName = (event) => {
        //setName(event.target.value);
        var round = props.roundProperties;
        round.name = event.target.value;
        props.setRound(round);
    }
    // evenement sur le changement de la date du tournois
    const changeDate = (event) => {
        //setDate(event.target.value)
    }

    // evenement sur le changement de la heure du tournois
    const changeHour = (event) => {
        //setHour(event.target.value)
    }
    // evenement sur le nombre de joueur maximun lors tournois
    const changeMaxPlayer = (event) => {
        //setMaxPlayer(event.target.value)
    }

    // evenement sur l'affectation des points à attribuer au demarrage du tournois
    const changePointAttributs = (event) => {
        //setPointAttributs(event.target.value)
    }
    // evenement sur le changement du status ouvert ou fermé (inscription possible ou non) du tournois
    const changeOpen = (event) => {
        //setBuyIn(event.target.value)
    }
    const changeBuyIn =(event)=>{}
    const changeRake = (event) => {
        //setRake(event.target.value)
    }
    const changeStack = (event) => {
        //setStack(event.target.value)
    }
    const changeAddon = (event) => {
        //setAddon(event.target.value)
    }
    const changeRebuy = (event) => {
        //setRebuy(event.target.value)
    }
    const changeBounty = (event) => {
        var round = props.roundProperties;
        round.bounty = event.target.value;
        props.setRound(round);
        console.log(round)
    }
    return (
        (!props.roundProperties) ? null :
            <div>
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
                                    <input type="text" value={name} onChange={changeName}>
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
                                    <input type="text" value={props.roundProperties.date_round} onChange={changeDate}></input>
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
                                    <input type="text" value={props.roundProperties.hour_round} onChange={changeHour}></input>
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
                                    <input type="text" value={props.roundProperties.max_player} onChange={changeMaxPlayer}></input>
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
                                    <input type="text" value={props.roundProperties.points_attributs} onChange={changePointAttributs}></input>
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
                                    <input type="text" value={props.roundProperties.open} onChange={changeOpen}></input>
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
                                    <input type="text" value={props.roundProperties.close} ></input>
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
                                    <input type="text" value={props.roundProperties.buy_in} onChange={changeBuyIn}></input>
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
                                    <input type="text" value={props.roundProperties.rake} onChange={changeRake}></input>
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
                                    <input type="text" value={props.roundProperties.stack} onChange={changeStack}></input>
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
                                    <input type="text" value={props.roundProperties.addon} onChange={changeAddon}></input>
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
                                    <input type="text" value={props.roundProperties.rebuy} onChange={changeRebuy}></input>
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
                                    <input type="text" value={props.roundProperties.bounty} onChange={changeBounty}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                <UsersRegisterRound {...props} />
            </tbody>
        </table>
    )
})


// affiche l'ensemble de gestion d'un tournois ainsi que la liste des inscrits
// atttention l'utilisateur doit avoir le droit de gestion d'un tournois 
// si l'utilisateur ne dipose pas du droit il est rediriger sur la page accueil
const RoundManagement = (props) => {
    const params = useParams();
    const [rights] = useState(Rights.rights);
    const [round, setRound] = useState(null);
    const [rounds, setRounds] = useState([]);
    useEffect(() => {
        if (!round) {
            PlayerByRoundModel.fetchUsers(params.id)
            setRounds(RoundsModel.rounds);
            setRound(rounds.find((roundFind) => roundFind.id_round == params.id));
        }
    });
    const handleUpdateRounds = (event) => {
        //RoundsModel.fetchUpdateRound(round)
        console.log(round)
    }
    return (
        (rights.some((right) => right.name_right === "manage_round")) ?
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
                            <FormPropertiesRound roundProperties={round} setRound={setRound} ></FormPropertiesRound>
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