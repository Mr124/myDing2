import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Camera = (props) => {
  const [pickedImage, setPickedImage] = useState();

  const cameraHandler = async () => {
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedImage ? (
          <Text>No Photo taken yet!</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button title="Take Photo" onPress={cameraHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Camera;
