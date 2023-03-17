import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import RainyScreen from "./RainyScreen";

export default function App() {
  return (
    <View>
      <RainyScreen />
      <StatusBar style="light" />
    </View>
  );
}
