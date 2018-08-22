import firebase from 'firebase';
// import { auth } from '../firebase';
const googleSignIn = value => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);

    firebase.auth().onAuthStateChanged(currentUser => {
        console.log("google login - current user", currentUser);
        value.updateState({
            name: currentUser.displayName || "",
            email: currentUser.email || "",
            phone: currentUser.phoneNumber || "",
            photo: currentUser.photoURL || ""
        });
    });
};



export default googleSignIn;