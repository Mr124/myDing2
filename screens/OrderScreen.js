import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Orders = (props) => {
  return (
    <View>
      <Text>Orders Page</Text>
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

const styles = StyleSheet.create({});

export default Orders;
