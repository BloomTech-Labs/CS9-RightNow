import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
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


const config = {
  apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
  authDomain: "react-firebase-auth-f2581.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
  projectId: "react-firebase-auth-f2581",
  storageBucket: "react-firebase-auth-f2581.appspot.com",
  messagingSenderId: "549388490497"
};


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

  // THIS WORKS
  // const newAppt = await createNewAppointment({
  //   active: true,
  //   details: {
  //     time: "3:30 - 5:30",
  //     place: "some location",
  //     cost: "$400",
  //     type: "haircut"
  //   },
  //   businessId: "xGXdWn7l2mQWiLiVziOv4zJqsGi2"
  // });
  // console.log(newAppt);

  // THIS WORKS
  // const fresh = await newFutureAppointment("xGXdWn7l2mQWiLiVziOv4zJqsGi2", "mEHyeJ7nsIcsYWh9Jrqa");
  // console.log(fresh);

  // THIS WORKS
  const confirm = await customerConfirmsAppt("e4WqE9gsGOy7XVi3jesx", "GcvSXEc5IavQ8pT0FUJM");
  console.log(confirm);
});


export default firebase;


export {
  auth, 
  db
}
