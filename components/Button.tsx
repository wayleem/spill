// components/Button.tsx
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import tw from "twrnc";

interface ButtonProps {
	title: string;
	onPress: () => void;
	style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
	return (
		<Pressable style={[tw`bg-blue-500 py-2 px-4 rounded-lg`, styles.button, style]} onPress={onPress}>
			<Text style={tw`text-white text-center font-bold`}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		elevation: 3,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
	},
});

export default Button;
