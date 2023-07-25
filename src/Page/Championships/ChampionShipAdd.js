import React, { useEffect, useState,useContext } from 'react';
import { HaveRight } from '../../Services/UserService';
import { AddChampionShip} from '../../Constantes/Right';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import RoundsContext from '../../Context/RoundsContext';
import { GetRounds } from "../../Services/RoundsService";
import { AddChampionShipFn } from '../../Services/ChampionShipService';

const ChampionShipAdd = (props) => {
    console.log('ChampionShipAdd')
    const handleSubmitAddChampionShip = (event) => { 
         event.preventDefault();
        AddChampionShipFn({name:name,dateBegin:dateBegin,dateEnd:dateEnd,rounds:roundsSelected});
    };
    const [dateBegin, setDateBegin] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [name, setName] = useState();
    const [roundsSelected,setRoundsSelected] = useState([]);
    const { rounds,setRound } = useContext(RoundsContext);
    useEffect(()=>  GetRounds(setRound), [setRound] )
  // evenement sur le changement de la date du tournois
    const changeDateBegin = (event) => {
        setDateBegin(event.target.value)
    }
     const changeDateEnd = (event) => {
        setDateEnd(event.target.value)
    }
    const changeName = event => {
        setName(event.target.value)
    }
    const clickOptionsRounds = event => {
        var rounds = roundsSelected;
        if (event.target.selected)
            {
            rounds.push(event.target.value);
            } else {
            rounds.splice(rounds.indexOf(event.target.value), 1);
        }
        console.log(rounds)
        setRoundsSelected(rounds)
    }
    return (
         (HaveRight(AddChampionShip)) ?
         <section className="col-12 round p-5">
                    <div className="row ">
                        <form className="col-12 col-lg-6 offset-lg-3 bg-grey-light" onSubmit={handleSubmitAddChampionShip}>
                            <div className="form-group">
                                <label htmlFor="InputDateBegin" className="color-gold-light">Date</label>
                                <input type="date" className="form-control input-grey-light" id="InputDateBegin" aria-describedby="dateHelp" placeholder="Enter date" onChange={changeDateBegin} value={dateBegin}/>
                                <label htmlFor="InputDateEnd" className="color-gold-light">Date</label>
                                <input type="date" className="form-control input-grey-light" id="InputDateEnd" aria-describedby="dateHelp" placeholder="Enter date" onChange={changeDateEnd} value={dateEnd}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputName" className="color-gold-light">Nom du championnat</label>
                                <input type="text" className="form-control input-grey-light" id="InputName" aria-describedby="nameHelp" placeholder="Intitulé de la partie" onChange={changeName} value={name} />
                        </div>
                      <div className="form-group">
                                <label htmlFor="rounds" className="form-label select-label color-gold-light">Nom du championnat</label>
                            <select type="select"
                                name="rounds"
                                className="form-control form-select"
                                id="rounds"
                                aria-label="multiple select rounds"
                                multiple>
                                {rounds.map((round, index) => {
                                    return(
                                    <option
                                            key={index}
                                            onClick={clickOptionsRounds}
                                        value={round.id_round}>
                                        {round.name_round}
                                    </option>)
                                })}
                            </select>
                        </div>
                        
                            <button type="submit" className="btn btn-gold-light" >Submit</button>
                        </form>
                    </div>
                </section >
            : <Redirect to="/"></Redirect>
    )

}
export default ChampionShipAdd;