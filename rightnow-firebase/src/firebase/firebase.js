import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { 
  findUserById, 
  findUserByField, 
  registerCustomer, 
  registerUser, 
  createUser,
  newAppointment,
  getApptHost
} from "./db_interact";


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
  // const document = await findUserById("users_ACTUAL", currentUser.uid);
  // const document = await findUserById("appt_ACTUAL", "ZYKS8bDKrtiKCZ6CiFxS");
  // console.log(document.host.id); // returns document id in business database

  // THIS WORKS
  // const byFieldValue = await findUserByField("users_ACTUAL", "uid", currentUser.uid);
  // console.log(byFieldValue);

  // THIS WORKS
  // const newUser = await createUser("users_ACTUAL", { email: "jeffreyflynn@gmail.com", uid: currentUser.uid });
  // console.log(newUser);

  // THIS WORKS
  // const newUser = await registerUser("busn_ACTUAL", { email: "thisismyemail@gmail.com", uid: "314159" });
  // console.log(newUser);

  // THIS WORKS
  // const newAppt = await newAppointment({
  //   active: true,
  //   details: {
  //     time: "3:30 - 5:30",
  //     place: "some location",
  //     cost: "$400",
  //     type: "haircut"
  //   },
  //   bookie: 314159
  // });
  // console.log(newAppt);
});


export default firebase;


export {
  auth, 
  db
}
