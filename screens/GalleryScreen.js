import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";

import ObjectItem from "../components/ObjectItem";
import * as objectActions from "../store/photo-actions";

const Gallery = (props) => {
  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();
  console.log("Nachfolgend kommen photos und state.photos.photos");
  console.log(photos);
  console.log(state.photos.photos);

  useEffect(() => {
    dispatch(objectActions.loadObjects());
  }, [dispatch]);

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ObjectItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          description={itemData.item.description}
          onSelect={() =>
            props.navigation.navigate("GalleryDetail", {
              objectTitle: itemData.item.title,
              objectId: itemData.item.id,
              objectDescription: itemData.item.description,
              objectImage: itemData.item.imageUri,
            })
          }
        />
      )}
    />
  );
};

Gallery.navigationOptions = (navData) => {
  return {
    headerTitle: "Gallery",
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
          title="Menu"
          iconName="camera-outline"
          onPress={() => {
            navData.navigation.navigate("Photo");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});

export default Gallery;
