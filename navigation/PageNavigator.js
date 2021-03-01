import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import GalleryDetailScreen from "../screens/GalleryDetailScreen";
import GalleryScreen from "../screens/GalleryScreen";
import HomeScreen from "../screens/HomeScreen";
import InstructionsScreen from "../screens/InstructionsScreen";
import OrderScreen from "../screens/OrderScreen";
import PhotoScreen from "../screens/PhotoScreen";
import AboutScreen from "../screens/AboutScreen";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerBackImage: () => <Image source={require("../assets/QR.png")} />,
  headerTintColor: "white",
};

const GalleryNavigator = createStackNavigator(
  {
    Gallery: GalleryScreen,
    GalleryDetail: GalleryDetailScreen,
    Photo: PhotoScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Instructions: InstructionsScreen,
    About: AboutScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const OrderNavigator = createStackNavigator(
  {
    Order: OrderScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const PhotoNavigator = createStackNavigator(
  {
    Photo: PhotoScreen,
    Gallery: GalleryScreen,
    GalleryDetail: GalleryDetailScreen,
  },
  { defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Homie: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{}}>Home</Text>,
      tabBarIcon: () => {
        return (
          <AntDesign name="home" size={24} color={Colors.secondaryColor} />
        );
      },
      tabBarColor: "yellow",
    },
  },
  Orders: {
    screen: OrderNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{}}>Orders</Text>,
      tabBarIcon: () => {
        return (
          <AntDesign
            name="shoppingcart"
            size={24}
            color={Colors.secondaryColor}
          />
        );
      },
      tabBarColor: "yellow",
    },
  },
  Photos: {
    screen: PhotoNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{}}>Camera</Text>,
      tabBarIcon: () => {
        return (
          <AntDesign name="camerao" size={24} color={Colors.secondaryColor} />
        );
      },
      tabBarColor: "yellow",
    },
  },
  Gallery: {
    screen: GalleryNavigator,
    navigationOptions: {
      tabBarLabel: <Text style={{}}>Gallery</Text>,
      tabBarIcon: () => {
        return (
          <FontAwesome name="photo" size={24} color={Colors.secondaryColor} />
        );
      },
      tabBarColor: "yellow",
    },
  },
};

const HomeTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: "white",
  shifting: false,
  barStyle: {
    backgroundColor: Colors.primaryColor,
  },
});

const PhotoTabNavigator = createMaterialBottomTabNavigator(tabScreenConfig, {
  activeColor: "white",
  shifting: false,
  barStyle: {
    backgroundColor: "yellow",
  },
});

const DrawerMainNavigator = createDrawerNavigator({
  HomeDrawer: {
    screen: HomeTabNavigator,
    navigationOptions: {
      drawerLabel: "Home",
    },
  },
  PhotoDrawer: {
    screen: PhotoNavigator,
    navigationOptions: {
      drawerLabel: "Photo",
    },
  },
});

export default createAppContainer(DrawerMainNavigator);
