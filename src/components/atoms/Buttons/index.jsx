import React from "react";

import { ButtonDesign } from "./styles";

function Buttons(props) {
  return (
    <ButtonDesign {...props} size={props.size} color={props.color}>
      {props.children}
    </ButtonDesign>
  );
}

export default Buttons;
