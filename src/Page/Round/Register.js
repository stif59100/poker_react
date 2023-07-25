import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RegisterRound, GetRoundsRegister } from '../../Services/PlayerRoundsService';

const Register = (props) => {

    console.log(props.user)
    const handleClickRegister = async (e) => {
        console.log("je suis dans le handleResister")
        await RegisterRound(props.id_round, props.user.id);
        await GetRoundsRegister(props.user.id,props.setRoundsRegisterUser)
    }

    return (
        <button type="button" className="btn btn-grey-light" onClick={handleClickRegister} href="/Rounds">
            <FontAwesomeIcon icon={["fas", "registered"]} />
            <span>S'inscrire</span>
        </button>
    )
}
export default Register;