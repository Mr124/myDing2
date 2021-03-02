import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

import DetailObjectItem from "../components/DetailObjectItem";
// { uri: selectedObject.imageUri }  selectedObject.title
const GalleryDetail = (props) => {
  const photos = useSelector((state) => state.photos.photos);
  const itemId = props.navigation.getParam("objectId");
  const selectedObject = photos.find((item) => item.id === itemId);
  return (
    <ScrollView>
      <Image source={null} style={styles.image} />
      <View>
        <Text>ObjectName: {null}</Text>
        <Text>Description: {null}</Text>
        <Text>Platzhalter Location</Text>
        <Text>Platzhalter Price</Text>
      </View>
    </ScrollView>

    /*     <View>
      <Image style={styles.image} source={require("../assets/QR.png")} />
      <Text>GalleryDetail Page{props.title}</Text>
      <Text>hi {props.navigation.getParam("objectDescription")}</Text>
    </View> */
  );
};

GalleryDetail.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("objectTitle"),
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
  image: {
    width: "100%",
  },
});

export default GalleryDetail;
