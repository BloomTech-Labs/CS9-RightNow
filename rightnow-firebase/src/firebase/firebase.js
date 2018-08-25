import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { findUserById, findUserByField } from "./db_interact";


const config = {
  apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
  authDomain: "react-firebase-auth-f2581.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
  projectId: "react-firebase-auth-f2581",
  storageBucket: "react-firebase-auth-f2581.appspot.com",
  messagingSenderId: "549388490497"
};


firebase.initializeApp(config);


const auth = firebase.auth();
const db = firebase.firestore();


db.enablePersistence().catch(err => console.log("PERSISTANCE ERROR: ", err));


auth.onAuthStateChanged(async currentUser => {
  console.log("current user status has changed");
  console.log("current user is: ", currentUser);

  // THIS WORKS
  // const data = await findUserById("users_ACTUAL", currentUser.uid);
  // console.log(data);

  // THIS WORKS
  // const byFieldValue = await findUserByField("users_ACTUAL", "uid", currentUser.uid);
  // console.log(byFieldValue);
});


export default firebase;


export {
  auth, 
  db
}
