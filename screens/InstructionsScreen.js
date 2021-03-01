import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Instructions = (props) => {
  return (
    <View>
      <Text>Instructions Page</Text>
      <Text>Press Start to... start</Text>
      <Text>...</Text>
      <Text>Profit</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

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
