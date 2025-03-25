import React from "react";
import { AppRegistry } from "react-native";
import RemoteScreen from "./screens/RemoteScreen";
import { name as appName } from "../app.json";

AppRegistry.registerComponent(appName, () => RemoteScreen);
