// components/Input.tsx
import React from "react";
import { TextInput } from "react-native";
import tw from "twrnc";

interface InputProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	style?: object;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style }) => {
	return (
		<TextInput
			style={[tw`border border-gray-300 rounded-lg px-3 py-2`, style]}
			placeholder={placeholder}
			value={value}
			onChangeText={onChangeText}
		/>
	);
};

export default Input;
