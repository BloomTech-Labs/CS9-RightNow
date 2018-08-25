import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
  authDomain: "react-firebase-auth-f2581.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
  projectId: "react-firebase-auth-f2581",
  storageBucket: "react-firebase-auth-f2581.appspot.com",
  messagingSenderId: "549388490497"
};

firebase.initializeApp(config);

const db = firebase.firestore();

db.enablePersistence().catch(err => console.log("PERSISTANCE ERROR: ", err));

export default db;