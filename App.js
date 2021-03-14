import React from "react";
if (__DEV__) {
    import("./ReactotronConfig").then(() =>
        console.log("Reactotron Configured")
    );
}

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import configureStore from "./src/store";

import { AppNavigator } from "./src/AppNavigator";

const App = () => {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
};

// eslint-disable-next-line react/display-name
export default () => {
    return (
        <Provider store={configureStore()}>
            <App />
        </Provider>
    );
};
