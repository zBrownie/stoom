import React from "react";

import { TextDesign } from "./styles";

function Text(props) {
  return (
    <TextDesign color={props.color} size={props.size} weight={props.weight}>
      {props.children}
    </TextDesign>
  );
}

export default Text;
