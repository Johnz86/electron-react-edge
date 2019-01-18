import Langs from "common/langs";
import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { remote } from "electron";
import WindowControls from "../WindowControls";
import "./styles.css";

const App: FunctionComponent = () => {

    const currentWindow = remote.getCurrentWindow();
    const windowIsMaximized = currentWindow.isMaximized();
    const windowIsFullscreen = currentWindow.isFullScreen();

    const classes = classnames("m-app", {
        "m-app__darwin": process.platform === "darwin",
        "m-app__fullscreen": windowIsFullscreen,
        "m-app__maximized": windowIsMaximized
    });
    return (<div id="app" className={classes}>
        {!windowIsFullscreen && <WindowControls />}

        <div className="m-app-container">
            <header className="m-app--header">
                <div className="m-app--header-logo">
                    <img src={require("../../assets/logo.svg")} alt="logo" />
                    <span>{Langs.go("app.name")}</span>
                </div>
            </header>
        </div>
    </div>
    );
};

export default App;
