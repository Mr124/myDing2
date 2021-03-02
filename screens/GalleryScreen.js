import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import HeaderButton from "../components/HeaderButton";

import ObjectItem from "../components/ObjectItem";
import Colors from "../constants/Colors";
import * as objectActions from "../store/photo-actions";

const Gallery = (props) => {
  const photos = useSelector((state) => state.photos.photos);
  const dispatch = useDispatch();
  console.log("Nachfolgend kommen photos und state.photos.photos");
  console.log(photos);

  useEffect(() => {
    dispatch(objectActions.loadObjects());
  }, [dispatch]);

  return (
    <View style={styles.container}>
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
    </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColorTransparent,
  },
});

export default Gallery;
