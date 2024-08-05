// components/Input.tsx
import React, { ReactNode } from "react";
import { View, TextInput, KeyboardTypeOptions } from "react-native";
import tw from "twrnc";

interface InputProps {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	style?: object;
	keyboardType?: KeyboardTypeOptions;
	leftIcon?: ReactNode;
}

const Input: React.FC<InputProps> = ({
	placeholder,
	value,
	onChangeText,
	style,
	keyboardType = "default",
	leftIcon,
}) => {
	return (
		<View style={[tw`flex-row items-center border border-gray-300 rounded-lg bg-white`, style]}>
			{leftIcon && <View style={tw`pl-3`}>{leftIcon}</View>}
			<TextInput
				style={tw`flex-1 py-3 px-3 text-gray-700 text-base`}
				placeholder={placeholder}
				placeholderTextColor="#9CA3AF"
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
			/>
		</View>
	);
};

export default Input;
