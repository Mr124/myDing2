import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import CustomHeader from "../components/CustomHeader";

import Colors from "../constants/Colors";

const Home = (props) => {
  return (
    <View>
      <View style={styles.firstField}>
        <Text>Tag - Scan - Find</Text>
      </View>
      <View style={styles.secondField}>
        <Text>Suchst du ständig die Sachen deiner Kinder?</Text>
        <Text>Kostet dich die Suche viel Zeit?</Text>
        <Text>Wüsstest du gerne,</Text>
        <Text>wem all die Sachen im Kinderzimmer gehören?</Text>
      </View>
      <View style={styles.thirdField}>
        <Text>Dann...</Text>
      </View>
      <View style={styles.fourthField}>
        <Text>Tag sie doch!!!</Text>
        <Image source={require("../assets/QR.png")} />
      </View>
      <View style={styles.orderField}>
        <View style={styles.buttonField}>
          <Button
            title="About Us"
            onPress={() => {
              props.navigation.navigate("About");
            }}
          />
        </View>
        <View style={styles.buttonField}>
          <Button
            title="Instructions"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Instructions",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

Home.navigationOptions = (navData) => {
  return {
    headerTitle: "Home",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  buttonField: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },
  firstField: {
    height: "10%",
    alignItems: "center",
    backgroundColor: Colors.firstField,
  },
  secondField: {
    height: "20%",
    alignItems: "center",
    backgroundColor: Colors.secondField,
  },
  thirdField: {
    height: "10%",
    alignItems: "center",
    backgroundColor: Colors.thirdField,
  },
  fourthField: {
    height: "40%",
    alignItems: "center",
    backgroundColor: Colors.fourthField,
  },
  orderField: {
    height: "20%",
    backgroundColor: Colors.orderField,
  },
});

export default Home;
