import React from "react";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App () {
    return(
        <NavigationIndependentTree>
            <Routes />
        </NavigationIndependentTree>

    )
}