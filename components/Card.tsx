// components/Card.tsx
import React from "react";
import { View } from "react-native";
import tw from "twrnc";

interface CardProps {
	children: React.ReactNode;
	style?: string;
}

const Card: React.FC<CardProps> = ({ children, style }) => {
	return <View style={[tw`bg-white rounded-lg p-4 shadow-md`, style ? tw(style) : {}]}>{children}</View>;
};

export default Card;
