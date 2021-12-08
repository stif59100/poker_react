import Menu from "../Menu/Menu";
import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";
const Header = () => {
  return (
    <header className="u-align-left u-clearfix u-header u-section-row-container" id="sec-62f0">
    <div className="u-section-rows">
    <div className="u-grey-70 u-section-row u-section-row-1" id="sec-46aa">
    <div className="u-clearfix u-sheet u-sheet-1">
    <LeftHeader/>
    <RightHeader/>
    </div>
    </div>
    <div className="u-section-row u-section-row-2 u-grey-70">
    <Menu/>
    </div>  
    </div>
    </header>
    
    );
  }
  
  export default Header;