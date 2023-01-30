import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HaveRight } from '../../Services/UserService';
import { ManageRoundRight } from '../../Constantes/Right';
const ManageRound = (props) => {
    console.log(props)
    return (
        HaveRight(ManageRoundRight) ?
            <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
                <button type="button" className="btn btn-grey-light" >
                    <FontAwesomeIcon icon={["fas", "registered"]} />
                    <span>Gérer</span>
                </button>
            </Link> :
            null)

}


export default ManageRound;