import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// importing screens 
import LoginScreen from "./screens/LoginScreen";
import AccountScreen from "./screens/AccountScreen";
import MobileNumberScreen from "./screens/MobileNumberScreen";
import ImportScreen from "./screens/ImportScreen";
import AddPersonScreen from "./screens/AddPersonScreen";
import GroupBalanceScreen from "./screens/GroupBalanceScreen";
import IndividualBalanceScreen from "./screens/IndividualBalanceScreen";

const Stack = createStackNavigator();

export default function navigation() {

    return (
        <Stack.Navigator initialRouteName="Login" >
            <Stack.Screen name="Login" component={LoginScreen} options = {{headerShown:false}}/>
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Mobile" component={MobileNumberScreen} options = {{headerShown:false}}/>
            <Stack.Screen name="Import" component={ImportScreen} options={{ title: 'Import Balances For' }}/>
            <Stack.Screen name="Add" component={AddPersonScreen} options = {{headerShown:false}}/>
            <Stack.Screen name="Gbal" component={GroupBalanceScreen} options={{ title: 'Balances For Groups' }}/>
            <Stack.Screen name="Ibal" component={IndividualBalanceScreen} options={{ title: 'Balances For Individuals' }}/>
        </Stack.Navigator>
    )
}

// screenOptions={{ headerShown: false }}