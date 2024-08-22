// screens/ScanScreen.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import tw from "twrnc";

const ScanScreen: React.FC = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-center pb-2`}>We need your permission to show the camera</Text>
        <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded`} onPress={requestPermission}>
          <Text style={tw`text-white font-bold`}>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const handleTakePicture = async () => {
    // This function will be implemented later
    console.log("Take picture");
  };

  return (
    <View style={tw`flex-1`}>
      <CameraView style={tw`flex-1`} facing={facing}>
        <View style={tw`flex-1 flex-row justify-center items-end bg-transparent mb-16`}>
          <TouchableOpacity style={tw`bg-blue-500 py-2 px-4 rounded mr-4`} onPress={toggleCameraFacing}>
            <Text style={tw`text-white font-bold`}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-green-500 py-2 px-4 rounded`} onPress={handleTakePicture}>
            <Text style={tw`text-white font-bold`}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

export default ScanScreen;
