import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ObjectItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.objectItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>{props.location}</Text>
        <Text>{props.price}€</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  objectItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
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

export default ObjectItem;
