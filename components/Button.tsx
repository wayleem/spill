// components/Button.tsx
import React from "react";
import { Pressable, Text } from "react-native";
import tw from "twrnc";

interface ButtonProps {
	title: string;
	onPress: () => void;
	style?: object;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
	return (
		<Pressable
			style={({ pressed }) => [
				tw`bg-blue-500 py-3 px-6 rounded-lg shadow-md`,
				pressed ? tw`bg-blue-600` : {},
				style,
			]}
			onPress={onPress}
		>
			<Text style={tw`text-white text-center font-bold text-lg`}>{title}</Text>
		</Pressable>
	);
};

export default Button;
