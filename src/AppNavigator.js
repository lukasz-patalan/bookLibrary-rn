import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ResolveAuthScreen from "./screens/ResolveAuthScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import CreateBlogScreen from "./screens/CreateBlogScreen";
import DashboardScreen from "./screens/DashboardScreen";
import BooksCollectionScreen from "./screens/BooksCollectionScreen";
import AddBookScreen from "./screens/AddBookScreen";
import { MyTabBar } from "./components/MyTabBar";
import { SettingsScreen } from "./screens/SettingsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabsComponent = () => {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen name="dashboard" component={DashboardScreen} />
            <Tab.Screen
                name="book collection"
                component={BooksCollectionScreen}
            />
            <Tab.Screen name="add book" component={AddBookScreen} />
            <Tab.Screen name="settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};
export const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="resolveAuth"
                component={ResolveAuthScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen
                name="CreateBlog"
                component={CreateBlogScreen}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen
                name="mainFlow"
                component={TabsComponent}
                options={{ gestureEnabled: false }}
            />
        </Stack.Navigator>
    );
};
