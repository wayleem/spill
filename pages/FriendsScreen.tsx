// screens/FriendsScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const FriendsScreen: React.FC = () => {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Text style={tw`text-xl font-bold`}>Friends Screen</Text>
			<Text style={tw`mt-2`}>Manage your friends here</Text>
		</View>
	);
};

export default FriendsScreen;
