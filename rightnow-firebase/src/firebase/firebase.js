import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
<<<<<<< HEAD
=======
import { 
  findUserById, 
  findUserByField, 
  registerCustomer, 
  registerUser, 
  createUser,
  createNewAppointment,
  getApptHost,
  newFutureAppointment,
  customerConfirmsAppt
} from "./db_interact";

>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4

const config = {
  apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
  authDomain: "react-firebase-auth-f2581.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
  projectId: "react-firebase-auth-f2581",
  storageBucket: "react-firebase-auth-f2581.appspot.com",
  messagingSenderId: "549388490497"
};
<<<<<<< HEAD
firebase.initializeApp(config);

// const db = firebase.firestore();
// const firestore = firebase.firestore();

export default firebase;
=======


const firestoreSsettings = {
  timestampsInSnapshots: true
}


firebase.initializeApp(config);


const auth = firebase.auth();
const db = firebase.firestore();


db.settings(firestoreSsettings);


db.enablePersistence().catch(err => console.log("PERSISTANCE ERROR: ", err));


auth.onAuthStateChanged(async currentUser => {
  console.log("current user status has changed");
  console.log("current user is: ", currentUser);
});


export default firebase;


export {
  auth, 
  db
}
>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4
