import Langs from "common/langs";
import React from "react";
import { render } from "react-dom";
import { ipcRenderer, remote } from "electron";
import Loading from "./components/Loading";
import App from "./views/App";
import "./assets/main.css";

render(<Loading><App /></Loading>, document.getElementById("app"));

const loader = () => {
  const loading = document.getElementById("loading")!;
  if (process.platform === "darwin" || process.env.SIMULATE_DARWIN) {
    loading.classList.add("m-window-loading__darwin");
  }
  // Wait the window is ready to fadeIn loading
  setTimeout(() => loading.classList.add("show"), 50);
  setTimeout(() => {
    const container = document.getElementById("container")!;
    container.classList.add("show");
    loading.remove();
  }, 100);
};

loader();

ipcRenderer.on("go-update", (event: any, info: any) => {
  let message = Langs.go("update.releaseAvailable", info.version);
  if (info.releaseNotes) {
    message += Langs.go("update.releaseNotes", info.releaseNotes);
  }
  remote.dialog.showMessageBox(
    {
      buttons: [Langs.go("update.installRelaunch"), Langs.go("update.later")],
      defaultId: 0,
      detail: message,
      message: Langs.go("update.newVersionDownloaded", remote.app.getName()),
      type: "question"
    },
    response => {
      if (response === 0) {
        setTimeout(() => ipcRenderer.send("ask-quitAndInstall"), 1);
      }
    }
  );
});
