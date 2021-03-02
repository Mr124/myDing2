import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const Orders = (props) => {
  return (
    <View>
      <Text style={styles.description}>Want to order new Tags?</Text>
      <Text style={styles.description}>
        Go ahead and order 25 Tags for free by entering your prefered location!
      </Text>
      <TextInput style={styles.form} />
      <Button
        title="Send order!"
        onPress={() =>
          Alert.alert("Ordering done!", "Your Tags will be shipped soon!", [
            {
              text: "Understood",
              onPress: () => props.navigation.navigate("Home"),
            },
          ])
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
  form: {
    backgroundColor: Colors.firstField,
    width: "50%",
    height: 40,
    alignItems: "center",
    marginBottom: 5,
  },
});

export default Orders;
