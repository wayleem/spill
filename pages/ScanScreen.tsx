// screens/ScanScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const ScanScreen: React.FC = () => {
	return (
		<View style={tw`flex-1 justify-center items-center`}>
			<Text style={tw`text-xl font-bold`}>Scan Screen</Text>
			<Text style={tw`mt-2`}>Scan your receipt here</Text>
		</View>
	);
};

export default ScanScreen;
