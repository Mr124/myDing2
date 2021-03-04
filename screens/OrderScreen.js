import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const Orders = (props) => {
  const [nameValue, setNameValue] = useState("");
  const nameChangeHandler = (text) => {
    setNameValue(text);
  };
  const [streetValue, setStreetValue] = useState("");
  const streetChangeHandler = (text) => {
    setStreetValue(text);
  };
  const [plzValue, setPlzValue] = useState("");
  const plzChangeHandler = (text) => {
    setPlzValue(text);
  };
  const [cityValue, setCityValue] = useState("");
  const cityChangeHandler = (text) => {
    setCityValue(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.descriptionTitle}>Want to order new Tags?</Text>
      <Text style={styles.description}>
        Go ahead and order 25 Tags for free by entering your preferred location!
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.form}
          placeholder={"Your Name"}
          onChangeText={nameChangeHandler}
          value={nameValue}
        />
        <TextInput
          style={styles.form}
          placeholder={"Your Street"}
          onChangeText={streetChangeHandler}
          value={streetValue}
        />
        <TextInput
          style={styles.form}
          placeholder={"Your PLZ"}
          onChangeText={plzChangeHandler}
          value={plzValue}
        />
        <TextInput
          style={styles.form}
          placeholder={"Your City"}
          onChangeText={cityChangeHandler}
          value={cityValue}
        />
      </View>
      <Button
        title="Send order!"
        onPress={() =>
          Alert.alert(
            "Ordering done!",
            `Thank you ${nameValue}!\nYour tags will be shipped to\n${streetValue} in ${plzValue}, ${cityValue}`,
            [
              {
                text: "Understood",
                onPress: () => props.navigation.navigate("Home"),
              },
            ]
          )
        }
      />
    </View>
  );
};

Orders.navigationOptions = (navData) => {
  return {
    headerTitle: "Order",
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
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColorTransparent,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: Colors.firstField,
    width: 150,
    height: 40,
    alignItems: "center",
    marginBottom: 5,
    textAlign: "center",
  },
  descriptionTitle: {
    fontSize: 22,
    padding: 10,
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: Colors.thirdField,
  },
  description: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    backgroundColor: Colors.secondField,
  },
});

export default Orders;
