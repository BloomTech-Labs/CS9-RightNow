import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
<<<<<<< HEAD
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
=======
>>>>>>> 3ab81771e9598e741908b466d64ec87eb73a147f

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


firebase.initializeApp(config);


const auth = firebase.auth();
const db = firebase.firestore();


db.settings({ timestampsInSnapshots: true });


db.enablePersistence().catch(err => console.log("PERSISTANCE ERROR: ", err));


auth.onAuthStateChanged(async currentUser => {
  console.log("current user status has changed");
  console.log("current user is: ", currentUser);
});


export default firebase;


export {
  auth, 
  db
<<<<<<< HEAD
}
>>>>>>> 955aeeee21f5c3a3a8c3382c396504dc929c5ed4
=======
}
>>>>>>> 3ab81771e9598e741908b466d64ec87eb73a147f
