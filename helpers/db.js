import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("objects.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS objects (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, description TEXT NOT NULL, location TEXT NOT NULL, price REAL NOT NULL);",
        [],
        () => {
          resolve();
          console.log("init war erfolgreich aus db.js");
        },
        (_, err) => {
          reject(err);
          console.log("init war NICHT erfolgreich aus db.js");
        }
      );
    });
  });
  return promise;
};

export const insertObject = (title, imageUri, description, location, price) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO objects(title, imageUri, description, location, price) VALUES (?, ?, ?, ?, ?);",
        [title, imageUri, description, location, price],
        (_, result) => {
          resolve(result);
          console.log("insertObject war erfolgreich aus db.js");
          console.log(result);
        },
        (_, err) => {
          reject(err);
          console.log("insertObject war NICHT erfolgreich aus db.js");
        }
      );
    });
  });
  return promise;
};

export const fetchObjects = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM objects",
        [],
        (_, result) => {
          resolve(result);
          console.log("fetchObject war erfolgreich aus db.js");
        },
        (_, err) => {
          reject(err);
          console.log("fetchObject war NICHT erfolgreich aus db.js");
        }
      );
    });
  });
  return promise;
};
