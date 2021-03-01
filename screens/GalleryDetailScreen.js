import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

import DetailObjectItem from "../components/DetailObjectItem";

const GalleryDetail = (props) => {
  const photos = useSelector((state) => state.photos.photos);
  const itemId = props.navigation.getParam("objectId");
  const selectedObject = photos.find((item) => item.id === itemId);
  console.log(selectedObject.imageUri);
  return (
    <ScrollView>
      <Image source={{ uri: selectedObject.imageUri }} style={styles.image} />
      <View>
        <Text>ObjectName: {selectedObject.title}</Text>
        <Text>Description: {selectedObject.description}</Text>
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
