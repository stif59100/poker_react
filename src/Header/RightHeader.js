
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const submitForm = ()=>
alert("submit");
const RightHeader = () =>{
    return (

<form className="u-border-1 u-border-grey-30 u-expanded-width-xs u-search u-search-right u-search-1" onSubmit={submitForm}>
    <button className="u-search-button" type="submit">
      <FontAwesomeIcon icon="search" size="1x"/>
    </button>
    <input className="u-search-input" type="search" name="search" value="" placeholder="Search"/>
  </form>
  )};
  export default RightHeader;