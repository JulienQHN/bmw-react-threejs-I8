import React from "react";
import logButton from "../img/logButton.png";

export default function ScrollButton() {
  return (
    <div>
      <img id="SB1" className="ScrollButton" src={logButton}></img>
      <img id="SB2" className="ScrollButton2" src={logButton}></img>
      <img id="SB3" className="ScrollButton3" src={logButton}></img>
      <img id="SB4" className="ScrollButton4" src={logButton}></img>
    </div>
  );
}
