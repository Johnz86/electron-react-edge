import { isDevelopment } from "common/env";
import classnames from "classnames";
import React, { FunctionComponent } from "react";
import Icon, {IconTypes} from "../../components/icons";
import { remote } from "electron";
import "./styles.css";

const WindowControls: FunctionComponent = props => {
  const isDarwin = process.platform === "darwin";
  const windowIsFocused = remote.getCurrentWindow().isFocused;
  const classes = classnames("m-window-controls", {
    "m-window-controls__darwin": isDarwin,
    "m-window-controls__focused": windowIsFocused
  });
  const close = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remote.getCurrentWindow().close();
  };
  const maximize = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    remote.getCurrentWindow().maximize();
  };
  const minimize = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remote.getCurrentWindow().minimize();
  };
  const showSettingsScreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className={classes}>
      <div className="m-drag" onDoubleClick={maximize} />

      <div className="m-window-controls--info">
        {isDevelopment && (
          <React.Fragment>{process.env.NODE_ENV}</React.Fragment>
        )}
      </div>

      <div className="m-window-controls--product-name">Starter</div>

      {!isDarwin && (
        <ul className="m-window-controls--buttons">
          <li>
            <button
              className="m-window-controls--settings m-window-controls--button"
              onClick={showSettingsScreen}
              type="button"
            >
              <Icon icon={IconTypes.GEAR} />
            </button>
          </li>
          <li>
            <button
              className="m-window-controls--minimize m-window-controls--button"
              onClick={minimize}
              type="button"
            >
              <Icon icon={IconTypes.MINIMIZE} />
            </button>
          </li>
          <li>
            <button
              className="m-window-controls--maximize m-window-controls--button"
              onClick={maximize}
              type="button"
            >
              <Icon icon={IconTypes.MAXIMIZE} />
            </button>
          </li>
          <li>
            <button
              className="m-window-controls--close m-window-controls--button"
              onClick={close}
              type="button"
            >
              <Icon icon={IconTypes.CLOSE} />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default WindowControls;
