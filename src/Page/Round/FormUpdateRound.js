import { useState } from "react";

// affiche les informations du formulaire pour le tournois
const FormUpdateRound = (props) => {
    const [date, setDate] = useState(props.round.date_round);
    const [hour, setHour] = useState(props.round.hour_round);
    const [name, setName] = useState(props.round.name_round);
    const [open, setOpen] = useState(props.round.open);
    const [points_attributs, setPointAttributs] = useState(1);
    const [maxPlayer, setMaxPlayer] = useState(1);
    const [buyIn, setBuyIn] = useState(1);
    const [rake, setRake] = useState(1);
    const [stack, setStack] = useState(1);
    const [addon, setAddon] = useState(1);
    const [rebuy, setRebuy] = useState(1);
    const [bounty, setBounty] = useState(1);
    const [close, setClose] = useState(0);

    const [addSuccess, setAddSuccess] = useState(false)

    const changeName = (event) => {
        setName(event.target.value);
        let round = props.round;
        round.name_round = event.target.value;
        props.setRound(round);
    }
    // evenement sur le changement de la date du tournois
    const changeDate = (event) => {
        setDate(event.target.value);
        let round = props.round;
        round.date_round = event.target.value;
        props.setRound(round);
    }

    // evenement sur le changement de la heure du tournois
    const changeHour = (event) => {
        setHour(event.target.value);
        let round = props.round;
        round.hour_round = event.target.value;
        props.setRound(round);
    }
    // evenement sur le nombre de joueur maximun lors tournois
    const changeMaxPlayer = (event) => {
        setMaxPlayer(event.target.value)
    }

    // evenement sur l'affectation des points à attribuer au demarrage du tournois
    const changePointAttributs = (event) => {
       setPointAttributs(event.target.value)
    }
    // evenement sur le changement du status ouvert ou fermé (inscription possible ou non) du tournois
    const changeOpen = (event) => {
        setBuyIn(event.target.value)
    }
    const changeBuyIn = (event) => { }
    const changeRake = (event) => {
        setRake(event.target.value)
    }
    const changeStack = (event) => {
        setStack(event.target.value)
    }
    const changeAddon = (event) => {
        setAddon(event.target.value)
    }
    const changeRebuy = (event) => {
        setRebuy(event.target.value)
    }
    const changeBounty = (event) => {
        setBounty(event.target.value);
    }
 
    return (
        (!props.round) ? null :
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
                                    <input type="text" defaultValue={name} onChange={changeName}>
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
                                    <input type="text" defaultValue={date} onChange={changeDate}></input>
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
                                    <input type="text" defaultValue={hour} onChange={changeHour}></input>
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
                                    <input type="text" defaultValue={maxPlayer} onChange={changeMaxPlayer}></input>
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
                                    <input type="text" defaultValue={points_attributs} onChange={changePointAttributs}></input>
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
                                    <input type="text" defaultValue={open} onChange={changeOpen}></input>
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
                                    <input type="text" defaultValue={close} ></input>
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
                                    <input type="text" defaultValue={buyIn} onChange={changeBuyIn}></input>
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
                                    <input type="text" defaultValue={rake} onChange={changeRake}></input>
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
                                    <input type="text" defaultValue={stack} onChange={changeStack}></input>
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
                                    <input type="text" defaultValue={addon} onChange={changeAddon}></input>
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
                                    <input type="text" defaultValue={rebuy} onChange={changeRebuy}></input>
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
                                    <input type="text" defaultValue={bounty} onChange={changeBounty}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}
export default FormUpdateRound;