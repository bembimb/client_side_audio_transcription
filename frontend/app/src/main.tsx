import "./style.css";
import { AppRegistry } from "react-native";
import App from "./App";

const appName = "FrontendViteTemplate";

AppRegistry.registerComponent(appName, () => App);

const rootTag =
  document.getElementById("root") ??
  (() => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    return root;
  })();

AppRegistry.runApplication(appName, {
  rootTag
});
