// App.tsx
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

const App = () => {
	return (
		<View style={tw`flex-1 justify-center items-center bg-blue-500`}>
			<Text style={tw`text-red-200 text-lg`}>Hello, Tailwind!</Text>
		</View>
	);
};

export default App;
