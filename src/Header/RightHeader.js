
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const submitForm = ()=>
alert("submit");
const RightHeader = () =>{
  const [search,setSearch] = useState();

  const onChangeSearch = (event) => setSearch(event.target.value);
    return (

<form className="col" onSubmit={submitForm}>
    <button className="u-search-button" type="submit">
      <FontAwesomeIcon icon="search" size="1x"/>
    </button>
    <input className="u-search-input" type="search" name="search" value={search} onChange={onChangeSearch} placeholder="Recherche"/>
  </form>
  )};
  export default RightHeader;