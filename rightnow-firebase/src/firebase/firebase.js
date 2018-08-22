import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCgjPS_Owf3O5PiOZaEqjisJa7SVRVhOZM",
    authDomain: "react-firebase-auth-f2581.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-f2581.firebaseio.com",
    projectId: "react-firebase-auth-f2581",
    storageBucket: "react-firebase-auth-f2581.appspot.com",
    messagingSenderId: "549388490497"
};
firebase.initializeApp(config);
export default firebase;

// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }

// const auth = firebase.auth();
// const db = firebase.database();
//
// export {
//     auth,
//     db,
// };