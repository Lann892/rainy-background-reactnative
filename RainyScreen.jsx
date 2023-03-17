import React from "react";
import { Image, Dimensions, StyleSheet, View } from "react-native";
import Rain from "./src/Rain";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: "hidden",
  },
  bg: {
    width,
    height,
  },
});

export default function RainyScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://image.winudf.com/v2/image1/Y29tLldhbGxwYXBlclN0dWRpby5CZXJsaW53YWxscGFwZXIuaW1hZ2VzLkhEX3NjcmVlbl8yXzE2Mjk5Mjg0NjlfMDcy/screen-2.jpg?fakeurl=1&type=.jpg",
        }}
        style={styles.bg}
      />
      <Rain />
    </View>
  );
}
