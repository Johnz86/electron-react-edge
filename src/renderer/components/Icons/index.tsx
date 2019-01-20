import React, { FunctionComponent } from "react";
import { icons, IconTypes } from "./icons";
import { IIconProps } from "./types";
import "./styles.css";
export { IconTypes };
export * from "./files";

const Icon: FunctionComponent<IIconProps> = props => {
  return (
    <div
      className="c-icon"
      dangerouslySetInnerHTML={{ __html: icons[props.icon] }}
    />
  );
};

export default Icon;
