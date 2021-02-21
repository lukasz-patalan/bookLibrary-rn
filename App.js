import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { Provider } from "react-redux";
import configureStore from "./src/store";

import { BooksCollectionScreen } from "./src/screens/BooksCollectionScreen";
import { Menu } from "./src/components/Menu";
import { AddBookScreen } from "./src/screens/AddBookScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";

const navigator = createSwitchNavigator({
    // loginFlow: createSwitchNavigator({}),
    mainFlow: createDrawerNavigator(
        {
            Dashboard: DashboardScreen,
            BooksCollection: BooksCollectionScreen,
            AddBook: AddBookScreen,
            Signup: SignupScreen,
            Signin: SigninScreen,
        },
        {
            initialRouteName: "Signup",
            contentComponent: Menu,
            // overlayColor: "transparent",
            contentOptions: {
                activeTintColor: "#000000",
                activeBackgroundColor: "#e6e6e6",
            },
        }
    ),
});

const App = createAppContainer(navigator);

// eslint-disable-next-line react/display-name
export default () => {
    return (
        <Provider store={configureStore()}>
            <App />
        </Provider>
    );
};
