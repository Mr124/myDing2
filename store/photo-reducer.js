import { ADD_PHOTO, SET_OBJECTS } from "./photo-actions";
import PhotoObject from "../models/photoObject";

const initialState = {
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OBJECTS:
      return {
        objects: action.objects.map(
          (ob) => new Object(ob.id.toString(), ob.title, ob.imageUri)
        ),
      };
    case ADD_PHOTO:
      const newObject = new PhotoObject(
        action.photoData.id,
        action.photoData.title,
        action.photoData.image,
        action.photoData.description
      );
      console.log("Ich bin das newObject aus photo-reducer.js");
      console.log(newObject);
      return {
        photos: state.photos.concat(newObject),
      };
    default:
      return state;
  }
};
