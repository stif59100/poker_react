import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const LaunchRound = (props) => {
    return (
        (props.rights && props.rights.length > 0) ?
            (props.rights.some((right) => right.name_right === "launch_round") ?
                <Link to={{ pathname: `/RoundManagement/${props.id_round}` }}>
                    <button type="button" className="btn btn-grey-light" >
                        <FontAwesomeIcon icon={["fas", "registered"]} />
                        <span>Lancer</span>
                    </button>
                </Link>
                : null

            ) : null)
}

export default LaunchRound;