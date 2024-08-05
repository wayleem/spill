// screens/HomeScreen.tsx
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Card from "../components/Card";
import Input from "../components/Input";

const HomeScreen: React.FC = () => {
	const [billAmount, setBillAmount] = useState("");
	const [friendCount, setFriendCount] = useState("");

	return (
		<SafeAreaView style={tw`flex-1 bg-gray-100`}>
			<View style={tw`flex-1`}>
				<View style={tw`bg-blue-500 p-4`}>
					<Text style={tw`text-2xl font-bold text-white`}>SplitSmart</Text>
				</View>
				<ScrollView contentContainerStyle={tw`flex-grow p-4`}>
					<Card>
						<Text style={tw`text-xl font-semibold mb-4 text-gray-800`}>New Bill</Text>
						<Input
							placeholder="Enter bill amount"
							value={billAmount}
							onChangeText={setBillAmount}
							keyboardType="numeric"
							leftIcon={<Ionicons name="cash-outline" size={24} color="#9CA3AF" />}
						/>
						<Input
							placeholder="Number of friends"
							value={friendCount}
							onChangeText={setFriendCount}
							keyboardType="numeric"
							leftIcon={<Ionicons name="people-outline" size={24} color="#9CA3AF" />}
							style={tw`mt-4`}
						/>
						<TouchableOpacity
							style={tw`mt-6 bg-blue-500 py-3 px-4 rounded-lg flex-row justify-center items-center`}
							onPress={() => console.log("Split bill")}
						>
							<Ionicons name="calculator-outline" size={24} color="white" style={tw`mr-2`} />
							<Text style={tw`text-white font-bold text-lg`}>Split Bill</Text>
						</TouchableOpacity>
					</Card>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
