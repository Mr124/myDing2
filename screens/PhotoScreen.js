import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import Camera from "../components/Camera";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
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
    <View style={styles.topContainer}>
      <Camera onImageTaken={imageTakenHandler} />
      <ScrollView>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <Text style={styles.title}>Photo Information</Text>
          <View style={styles.form}>
            <TextInput
              placeholder={"Object Name"}
              style={styles.textInput}
              onChangeText={titleChangeHandler}
              value={titleValue}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder={"Description"}
              style={styles.textInput}
              onChangeText={descriptionChangeHandler}
              value={descriptionValue}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder={"Location"}
              style={styles.textInput}
              onChangeText={locationChangeHandler}
              value={locationValue}
            />
          </View>
          <View style={styles.form}>
            <TextInput
              placeholder={"Price"}
              style={styles.textInput}
              onChangeText={priceChangeHandler}
              value={priceValue}
            />
          </View>
          <View style={styles.button}>
            <Button title="Save Object" onPress={savePhotoHandler} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
  };
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: Colors.secondaryColorTransparent,
  },
  form: {
    backgroundColor: Colors.firstField,
    width: "50%",
    height: 40,
    alignItems: "center",
    marginBottom: 5,
  },
  textInput: {
    padding: 10,
    textAlign: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: Colors.primaryColor,
    width: "70%",
    padding: 5,
    textAlign: "center",
  },
  button: {
    marginBottom: 15,
  },
  inputContainer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default Photo;
