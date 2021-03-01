import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import PageNavigator from "./navigation/PageNavigator";
import photosReducer from "./store/photo-reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  photos: photosReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

console.log(store);

export default function App() {
  return (
    <Provider store={store}>
      <PageNavigator />
    </Provider>
  );
}
