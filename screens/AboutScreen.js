import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Person from "../components/Person";
import Colors from "../constants/Colors";

const About = (props) => {
  return (
    <View style={styles.container}>
      <Person
        image={require("../assets/TK.png")}
        title={"Tobias `Teekay` Koch"}
        description={"Engagierter Wadenbeisser"}
        job={"Head of Innovation"}
        hobbys={"Bouldern"}
        onSelect={() => alert("Hi ich bin Tobi!")}
        colorBack={Colors.firstField}
      />
      <Person
        image={require("../assets/NW.jpg")}
        title={"Noah `The Win` Winneberger"}
        description={"Schwedisches Innovationsmodel"}
        job={"Innovations Gangster"}
        hobbys={"Feldhockey"}
        onSelect={() => alert("Hi ich bin Noah!")}
        colorBack={Colors.secondField}
      />
      <Person
        image={require("../assets/MM.png")}
        title={"Martin `Die Mauer` Maurer"}
        description={"Kann alles, darf nix"}
        job={"Fertig programmiertes Superbrain"}
        hobbys={"Mit Tesla die Weltherrschaft an sich reißen"}
        onSelect={() => alert("Hi ich bin Martin!")}
        colorBack={Colors.thirdField}
      />
      <Person
        image={require("../assets/TS.jpg")}
        title={"Timo Schneider"}
        description={"Kann nix, will alles"}
        job={"Digital X Logistics"}
        hobbys={"React Native ;)"}
        onSelect={() => alert("Hi ich bin Timo!")}
        colorBack={Colors.fourthField}
      />
    </View>
  );
};

About.navigationOptions = (navData) => {
  return {
    headerTitle: "About us",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColorTransparent,
  },
});

export default About;
