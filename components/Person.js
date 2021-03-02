import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

const Person = (props) => {
  const container = {
    marginLeft: 20,
    width: 260,
    padding: 8,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: Colors.secondaryColorTransparent,
  };
  const personItem = {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: props.colorBack,
  };

  return (
    <TouchableOpacity onPress={props.onSelect} style={personItem}>
      <Image style={styles.image} source={props.image} />
      <View style={container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text>{props.description}</Text>
        <Text>Job: {props.job}</Text>
        <Text>Hobbys: {props.hobbys}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
});

export default Person;
