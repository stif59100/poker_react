import { point } from "leaflet";
import { useState } from "react";
import RoundsModel from "../../Models/RoundsModel";
const FormAddRounds = (props) => {
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    const [points_attributs, setPointAttributs] = useState();
    const [maxPlayer, setMaxPlayer] = useState();
    const [buyIn, setBuyIn] = useState();
    const [rake, setRake] = useState();
    const [stack, setStack] = useState();
    const [addon, setAddon] = useState();
    const changeDate = (event) => {
        setDate(event.target.value)
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeOpen = (event) => {
        setOpen(event.target.value)
    }
    const changePointAttributs = (event) => {
        setPointAttributs(event.target.value)
    }
    const changeMaxPlayer = (event) => {
        setMaxPlayer(event.target.value)
    }
    const changeBuyIn = (event) => {
        setBuyIn(event.target.value)
    }
    const changeRake = (event) => {
        setRake(event.target.value)
    }
    const changeStack= (event) => {
        setStack(event.target.value)
    }
    const changeAddon= (event) => {
        setAddon(event.target.value)
    }
    const handleSubmitAddRound = (event) => {

        event.preventDefault();
        console.log(props)
        props.setAddMode(false);
        var round = { name: name, date: date, open: open, points_attributs: points_attributs, maxPlayer: maxPlayer,buyIn: buyIn, rake: rake,stack:stack, addon: addon }
        RoundsModel.fetchAddRound(round);

    }

    return (
        <section className="col-12 round p-5">
            <div class="row ">
                <form class="col-12 col-lg-6 offset-lg-3 bg-grey-light" onSubmit={handleSubmitAddRound}>

                    <div className="form-group">
                        <label for="InputDate" className="color-gold-light">Date</label>
                        <input type="date" className="form-control input-grey-light" id="InputDate" aria-describedby="dateHelp" placeholder="Enter date" onChange={changeDate} />
                        
                    </div>

                    <div className="form-group">
                        <label for="InputName" className="color-gold-light">Nom de la partie</label>
                        <input type="text" className="form-control input-grey-light" id="InputName" aria-describedby="nameHelp" placeholder="Intitulé de la partie" onChange={changeName} />

                        
                    </div>
                    <div className="form-group">
                        <label for="InputPoint" className="color-gold-light">Nombre de points</label>
                        <input type="number" className="form-control input-grey-light" id="InputPoint" aria-describedby="nameHelp" placeholder="Entrez le nombre de points attribués" onChange={changePointAttributs} />
                    </div>
                    <div className="form-group">
                        <label for="InputPlayer" className="color-gold-light">Nombre de joueurs</label>
                        <input type="number" className="form-control input-grey-light" id="InputPlayer" aria-describedby="nameHelp" placeholder="Entrez le nombre de joueurs maximum" onChange={changeMaxPlayer} />
                    </div>
                    <div className="form-group">
                        <label for="InputBuyIn" className="color-gold-light">Buy-in</label>
                        <input type="number" className="form-control input-grey-light" id="InputBuyIn" aria-describedby="nameHelp" placeholder="Montant de la partie" onChange={changeBuyIn} />
                    </div>
                    <div className="form-group">
                        <label for="InputRake" className="color-gold-light">Rake</label>
                        <input type="number" className="form-control input-grey-light" id="InputRake" aria-describedby="nameHelp" placeholder="Montant du rake" onChange={changeRake} />
                    </div>
                    <div className="form-group">
                        <label for="InputStack" className="color-gold-light">Stack</label>
                        <input type="number" className="form-control input-grey-light" id="InputStack" aria-describedby="nameHelp" placeholder="Saisissez le nombre de jetons par joueur" onChange={changeStack} />
                    </div>
                    <div className="form-group">
                        <label for="InputAddon" className="color-gold-light">Addon</label>
                        <input type="number" className="form-control input-grey-light" id="InputAddon" aria-describedby="nameHelp" placeholder="Saisissez le montant de l'addon ou rebuy" onChange={changeAddon} />
                    </div>
                    <div className="form-check">
                        <label className="form-check-label color-gold-light" for="checkOpen">Check is open register</label>
                        <input type="checkbox" className="form-check-input input-grey-light" id="checkOpen" value="false" onChange={changeOpen} />
                    </div>
                    <button type="submit" className="btn btn-gold-light" >Submit</button>
                </form>
            </div>
        </section >
    )
}


/*
(!props.Profils.rights[""])?
<Redirect to="/errors/rights"/>
:*/
const AddRound = (props) => {

    return <FormAddRounds setAddMode={props.setAddMode} />

}
export default AddRound;