// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./pages/HomeScreen";
import ScanScreen from "./pages/ScanScreen";
import FriendsScreen from "./pages/FriendsScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
}

function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeStack} />
				<Tab.Screen name="Scan" component={ScanScreen} />
				<Tab.Screen name="Friends" component={FriendsScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default App;
