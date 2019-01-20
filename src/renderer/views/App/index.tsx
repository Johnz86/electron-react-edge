import Langs from "common/langs";
import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { remote } from "electron";
import WindowControls from "../window";
import "./styles.css";
import Navigation from "../navigation";

const App: FunctionComponent = () => {

    const currentWindow = remote.getCurrentWindow();
    const windowIsMaximized = currentWindow.isMaximized();
    const windowIsFullscreen = currentWindow.isFullScreen();

    const classes = classnames("m-app", {
        "m-app__darwin": process.platform === "darwin",
        "m-app__fullscreen": windowIsFullscreen,
        "m-app__maximized": windowIsMaximized
    });
    return (<div className={classes}>
        {!windowIsFullscreen && <WindowControls />}

        <div className="m-app-container">
            <header className="m-app--header">
                <div className="m-app--header-logo">
                    <img src={require("../../assets/logo.svg")} alt="logo" />
                    <span>{Langs.go("app.name")}</span>
                </div>
            </header>
            <Navigation />
        </div>
    </div>
    );
};

export default App;
