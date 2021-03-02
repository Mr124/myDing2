import * as FileSystem from "expo-file-system";
import { insertObject, fetchObjects } from "../helpers/db";

export const ADD_PHOTO = "ADD_PHOTO";
export const SET_OBJECTS = "SET_OBJECTS";

export const addPhoto = (title, image, description, location, price) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    console.log("Es folgt der fileName aus addPhoto (photo-actions.js)");
    console.log(fileName);
    console.log("Es folgt der newPath aus addPhoto (photo-actions.js)");
    console.log(newPath);

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertObject(
        title,
        newPath,
        description,
        location,
        price
      );
      console.log("Ich bin das dbResult aus photo-actions.js-->addPhoto");
      console.log(dbResult);
      dispatch({
        type: ADD_PHOTO,
        photoData: {
          id: dbResult.insertId,
          title: title,
          imageUri: newPath,
          description: description,
          location: location,
          price: price,
        },
      });
      console.log("In photo-actions.js--> addPhoto wurde dispatch ausgeführt");
    } catch (err) {
      console.log(
        "Hier wurde ein Fehler geworfen photo-actions.js-->addPhoto catch(err)"
      );
      console.log(err);
      throw err;
    }
  };
};

export const loadObjects = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchObjects();
      dispatch({ type: SET_OBJECTS, objects: dbResult.rows._array });
      console.log(
        "Ich bin dbResult.rows._array aus photo-action.js-->loadObjects"
      );
      console.log(dbResult.rows._array);
    } catch (err) {
      console.log("loadObjects in photo-actions.js aktiviert catch=Error");
      throw err;
    }
  };
};
