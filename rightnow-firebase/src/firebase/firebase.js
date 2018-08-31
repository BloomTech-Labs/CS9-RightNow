import * as firebase from "firebase";


const config = {
  apiKey: "AIzaSyDiJYmUywj-vpVm_qCSyZR9zNlQVVtSrbE",
  authDomain: "sesho-dev.firebaseapp.com",
  databaseURL: "https://sesho-dev.firebaseio.com",
  projectId: "sesho-dev",
  storageBucket: "sesho-dev.appspot.com",
  messagingSenderId: "923587060739",
};

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