import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { BooksCollectionScreen } from "./src/screens/BooksCollectionScreen";
import { Menu } from "./src/components/Menu";
import { AddBookScreen } from "./src/screens/AddBookScreen";
import { SignupScreen } from "./src/screens/SignupScreen";

const navigator = createSwitchNavigator({
    // loginFlow: createSwitchNavigator({}),
    mainFlow: createDrawerNavigator(
        {
            Dashboard: DashboardScreen,
            BooksCollection: BooksCollectionScreen,
            AddBook: AddBookScreen,
            Signup: SignupScreen,
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

export default createAppContainer(navigator);
