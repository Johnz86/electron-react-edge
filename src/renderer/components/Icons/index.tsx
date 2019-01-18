import React, { FunctionComponent } from "react";
import { icons, IconTypes } from "./icons";
import { IIconProps } from "./types";
export { IconTypes };
import "./styles.css";

const Icon: FunctionComponent<IIconProps> = props => {
  return (
    <div
      className="c-icon"
      dangerouslySetInnerHTML={{ __html: icons[props.icon] }}
    />
  );
};

export default Icon;
