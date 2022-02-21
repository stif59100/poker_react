import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LeftHeader = () => {
    return (

        <div className="col-12 col-lg-3 offset-lg-1 icons-social">
            <div className="d-flex justify-content-start align-items-center h-100">
                <a className="fb" title="facebook" target="_blank" href="https://facebook.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "facebook"]} size="1x" />
                </a>
                <a className="twitter" title="twitter" target="_blank" href="https://twitter.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
                </a>
                <a className="instagram" title="instagram" target="_blank" href="https://www.instagram.com/name" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
                </a>
            </div>
        </div>
    )
}

export default LeftHeader;