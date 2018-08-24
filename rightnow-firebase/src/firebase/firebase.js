import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// let db;
export const init = () => {
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
    // const db = firebase.firestore();
    return firebase.firestore();
};
// export default firebase;
// db = firebase.firestore();

// export default db;

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