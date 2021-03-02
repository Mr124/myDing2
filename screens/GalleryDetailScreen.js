import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

import DetailObjectItem from "../components/DetailObjectItem";
// { uri: selectedObject.imageUri }  selectedObject.title
const GalleryDetail = (props) => {
  const photos = useSelector((state) => state.photos.photos);
  console.log("this is photos");
  console.log(photos);
  const itemId = props.navigation.getParam("objectId");
  console.log("this is itemId");
  console.log(itemId);
  const selectedObject = photos.find((item) => item.id === itemId);
  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedObject.imageUri }} style={styles.image} />
      <View style={styles.list}>
        <Text style={styles.title}>ObjectName</Text>
        <Text style={styles.text}>{selectedObject.title}</Text>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.text}>{selectedObject.description}</Text>
        <Text style={styles.title}>Location</Text>
        <Text style={styles.text}>{selectedObject.location}</Text>
        <Text style={styles.title}>Price</Text>
        <Text style={styles.text}>{selectedObject.price}€</Text>
      </View>
    </View>

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
  container: {
    alignItems: "center",
  },
  list: {
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    borderWidth: 1,
    width: 150,
    justifyContent: "center",
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default GalleryDetail;
