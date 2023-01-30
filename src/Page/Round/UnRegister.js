import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UnRegisterRound, GetRoundsRegister } from '../../Services/PlayerRoundsService';
import { useContext } from 'react';
import UserContext from '../../Context/UserContext';

const UnRegister = (props) => {
    const { user } = useContext(UserContext);
    const handleClickUnRegister = async (e) => {
        await UnRegisterRound(props.id_round, user.id);
        await GetRoundsRegister(user.id, props.setRoundsRegisterUser)
    }

    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickUnRegister}>
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>Se desincrire</span>
        </button>
    )
}

export default UnRegister;