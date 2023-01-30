import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegisterRound, GetRoundsRegister } from '../../Services/PlayerRoundsService';
import { useContext } from 'react';
import UserContext from '../../Context/UserContext';

const Register = (props) => {
    const { user } = useContext(UserContext);

    const handleClickRegister = async (e) => {
        await RegisterRound(props.id_round, user.id);
        await GetRoundsRegister(user.id,props.setRoundsRegisterUser)
    }

    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickRegister} href="/Rounds">
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>S'inscrire</span>
        </button>
    )
}
export default Register;