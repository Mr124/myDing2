import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CustomHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <Image source={require("../assets/mountain.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
  },
});

export default CustomHeader;
