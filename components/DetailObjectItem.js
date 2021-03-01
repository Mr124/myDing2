import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailObjectItem = (props) => {
  return (
    <View style={styles.objectItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.location}</Text>
        <Text>{props.price}€</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  objectItem: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
    backgroundColor: "#ccc",
  },
  container: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default DetailObjectItem;
