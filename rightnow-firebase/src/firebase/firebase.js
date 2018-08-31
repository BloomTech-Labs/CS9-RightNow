import * as firebase from "firebase";


const config = {
  // apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
  // authDomain: "react-firebase-auth-f2581.firebaseapp.com",
  // databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
  // projectId: "react-firebase-auth-f2581",
  // storageBucket: "react-firebase-auth-f2581.appspot.com",
  // messagingSenderId: "549388490497"
  apiKey: "AIzaSyC8GntWKE3sWjrsT43KoK7MhxJK2DHLyf0",
  authDomain: "cs9-rightnow.firebaseapp.com",
  databaseURL: "https://cs9-rightnow.firebaseio.com",
  projectId: "cs9-rightnow",
  storageBucket: "cs9-rightnow.appspot.com",
  messagingSenderId: "903659903905"
};

//Stripe.setPublishableKey("pk_test_QVBVL73Xpp3epBxQSasMR294");

firebase.initializeApp(config);


const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });


// db.enablePersistence().catch(err => console.log("PERSISTANCE ERROR: ", err));


export default firebase;


export {
  auth, 
  db
}