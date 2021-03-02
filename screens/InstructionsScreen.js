import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const Instructions = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions Page</Text>
      <Text>Press Start to... start</Text>
      <Text>...</Text>
      <Text>Profit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondaryColorTransparent,
  },
  title: {
    fontSize: 22,
    padding: 10,
  },
});

export default Instructions;

Instructions.navigationOptions = (navData) => {
  return {
    headerTitle: "Instructions",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="arrow-back"
          onPress={() => {
            navData.navigation.goBack();
          }}
        />
      </HeaderButtons>
    ),
  };
};
