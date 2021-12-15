import React, { useState } from 'react';
import { useEffect,useRef } from "react";
import PlayerRound from '../../Models/PlayerRound';
import { observer } from 'mobx-react-lite';

const Round = () => {
    const [date, setDate] = useState();
    const [player, setPlayer] = useState();
    const [point, setPoint] = useState();


    const OptionPlayer = observer(() =>
   
        //PlayerRound.fetchManche(9)
         //return <label>test</label>
      PlayerRound.manches.map((manche, index) => {
                console.log(index)
                console.log(manche)
                return 
                <option key={index} value={manche.id_manche}>{manche.id_joueur}</option>
                //<OptionPlayer key={index} {...manches}></OptionPlayer>
            })
   
    );
    useEffect(()=>{
         //PlayerRound.fetchManche(9);
    //console.log(PlayerRound.manches())
    })
    const submit = (event) => {
        event.preventDefault();
        const message = 'my player is{player} and date is ${date}'
        alert(message)
    };

    const changeDate = (event) => {
        setDate(event.target.value)
    }

   const selectPlayer = (event)=>{
       setPlayer(event.target.value)
   }

   const addPoint = (event)=>{
        setPoint(event.target.value)
   }
    return (
        <section className="u-align-center u-clearfix u-image u-shading u-valign-bottom-xs u-section-1" src=""
            data-image-width="1440" data-image-height="900" id="sec-f665">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-text u-text-default u-title u-text-1"></div>
                <div className="u-text u-text-default u-text-2">

                    <form type="post" onSubmit={submit}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Date</th>
                                    <th>Joueur</th>
                                    <th>Points</th>
                                </tr>
                                <tr>
                                    <td><input type="date" placeholder="Saisissez la date" value={date} onChange={changeDate}></input></td>
                                    <td>
                                        {/* <select onChange={selectPlayer}>
                                            <option value="">
                                                Choisissez un joueur
                                            </option>
                                            <option value="Steeve">
                                                Steeve
                                            </option>
                                            <option value="Sandy">
                                                Sandy
                                            </option>
                                        </select> */}
                                        <select onChange={selectPlayer}>
                                        <OptionPlayer></OptionPlayer>
                                        </select>
                                    </td>
                                    <td><input type="int" placeholder="Saissez votre nombre de points" onChange={addPoint}></input></td>
                                </tr>
                                <tr>
                                    <td colSpan='3'>
                                        <button type="submit">Valider</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>


                </div>
            </div>
        </section>)

}
export default Round;