import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import Camera from "../components/Camera";
import HeaderButton from "../components/HeaderButton";
import * as photosActions from "../store/photo-actions";

const Photo = (props) => {
  //---Image Handling---
  const [selectedImage, setSelectedImage] = useState();
  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  //---Title Input Handling---
  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  //---Description Input Handling---
  const [descriptionValue, setDescriptionValue] = useState("");
  const descriptionChangeHandler = (text1) => {
    setDescriptionValue(text1);
  };

  //---Location Input Handling---
  const [locationValue, setLocationValue] = useState("");
  const locationChangeHandler = (text) => {
    setLocationValue(text);
  };

  //---Price Input Handling---
  const [priceValue, setPriceValue] = useState("");
  const priceChangeHandler = (text) => {
    setPriceValue(text);
  };

  const dispatch = useDispatch();

  const savePhotoHandler = () => {
    dispatch(
      photosActions.addPhoto(titleValue, selectedImage, descriptionValue)
    );
    console.log("savePhotoHandler wurde ausgeführt");
    props.navigation.navigate("Gallery");
    console.log("navigate zur Gallery wurde ausgeführt");
  };
  return (
    <View>
      <Camera onImageTaken={imageTakenHandler} />
      <View style={styles.inputContainer}>
        <Text>Photo Information</Text>
        <TextInput
          placeholder={"Object Name"}
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <TextInput
          placeholder={"Description"}
          style={styles.textInput}
          onChangeText={descriptionChangeHandler}
          value={descriptionValue}
        />
        <TextInput
          placeholder={"Location"}
          style={styles.textInput}
          onChangeText={locationChangeHandler}
          value={locationValue}
        />
        <TextInput
          placeholder={"Price"}
          style={styles.textInput}
          onChangeText={priceChangeHandler}
          value={priceValue}
        />
        <Button title="Save Object" onPress={savePhotoHandler} />
      </View>
    </View>
  );
};

Photo.navigationOptions = (navData) => {
  return {
    headerTitle: "Photo",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName="md-add"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  textInput: {},
  inputContainer: {
    marginTop: 15,
    alignItems: "center",
  },
});

export default Photo;
