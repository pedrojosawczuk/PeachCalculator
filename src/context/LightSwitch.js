import React, {useContext} from "react";
import { UserModeContext } from "./UserMode";

function LightSwitch() {
  const {userMode, toggleMode} = useContext(UserModeContext);
  const  handleClick = () => {
    toggleMode();
  }
  return (
    <div className={userMode ? `switch dark` : `switch light`}>
      <div className="lightswitch">
        <input type="checkbox" id="toggle-btn-1" onClick={handleClick} />
        <label for="toggle-btn-1"></label>
      </div>
    </div>
  )
}

export default LightSwitch