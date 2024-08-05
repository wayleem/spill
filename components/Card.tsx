// components/Card.tsx
import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";
import tw from "twrnc";

interface CardProps {
	children: ReactNode;
	style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
	return <View style={[tw`bg-white rounded-xl p-6 shadow-sm`, style]}>{children}</View>;
};

export default Card;
