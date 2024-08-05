// screens/HomeScreen.tsx
import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

const HomeScreen: React.FC = () => {
	const [inputValue, setInputValue] = useState("");

	return (
		<View style={tw`flex-1 p-4`}>
			<Card>
				<Text style={tw`text-lg font-bold mb-2`}>Welcome to SplitSmart</Text>
				<Input
					placeholder="Enter bill amount"
					value={inputValue}
					onChangeText={setInputValue}
					style={tw`mb-4`}
				/>
				<Button title="Split Bill" onPress={() => console.log("Split bill")} />
			</Card>
		</View>
	);
};

export default HomeScreen;
