// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import ScanScreen from "./pages/ScanScreen";
import FriendsScreen from "./pages/FriendsScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName: keyof typeof Ionicons.glyphMap;

						if (route.name === "Home") {
							iconName = focused ? "home" : "home-outline";
						} else if (route.name === "Scan") {
							iconName = focused ? "scan" : "scan-outline";
						} else if (route.name === "Friends") {
							iconName = focused ? "people" : "people-outline";
						} else if (route.name === "Profile") {
							iconName = focused ? "person" : "person-outline";
						} else {
							iconName = "alert-circle-outline";
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
				})}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Scan" component={ScanScreen} />
				<Tab.Screen name="Friends" component={FriendsScreen} />
				<Tab.Screen name="Profile" component={ProfileScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
