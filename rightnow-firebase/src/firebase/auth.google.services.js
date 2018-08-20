import firebase from 'firebase';
// import { auth } from '../firebase';
export const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
};

export default googleSignIn;