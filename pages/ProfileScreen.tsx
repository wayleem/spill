// screens/ProfileScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const ProfileScreen: React.FC = () => {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Text style={tw`text-xl font-bold`}>Profile Screen</Text>
			<Text style={tw`mt-2`}>Your profile information</Text>
		</View>
	);
};

export default ProfileScreen;
