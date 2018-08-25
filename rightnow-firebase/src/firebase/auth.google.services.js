import firebase from 'firebase';


const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
};



export default googleSignIn;