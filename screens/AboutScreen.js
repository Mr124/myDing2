import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const About = (props) => {
  return (
    <View>
      <Text>About Us Page</Text>
      <Text>We are</Text>
      <Text>Tobi</Text>
      <Text>Noah</Text>
      <Text>Martin</Text>
      <Text>Timo</Text>
    </View>
  );
};

About.navigationOptions = (navData) => {
  return {
    headerTitle: "About",
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

const styles = StyleSheet.create({});

export default About;
