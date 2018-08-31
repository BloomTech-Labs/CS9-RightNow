import firebase from 'firebase';


const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
};


// const onSignIn = googleUser => {
//     console.log('Google Auth Response', googleUser);
//     // We need to register an Observer on Firebase Auth to make sure auth is initialized.
//     const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
//       unsubscribe();
//       // Check if we are already signed-in Firebase with the correct user.
//       if (!isUserEqual(googleUser, firebaseUser)) {
//         // Build Firebase credential with the Google ID token.
//         const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
//         // Sign in with credential from the Google user.
//         firebase
//             .auth()
//             .signInAndRetrieveDataWithCredential(credential)
//             .catch(error => {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // The email of the user's account used.
//                 const email = error.email;
//                 // The firebase.auth.AuthCredential type that was used.
//                 const credential = error.credential;
//                 // [START_EXCLUDE]
//                 if (errorCode === 'auth/account-exists-with-different-credential') {
//                     alert('You have already signed up with a different auth provider for that email.');
//                     // If you are using multiple auth providers on your app you should handle linking
//                     // the user's accounts here.
//                 } else {
//                     console.error(error);
//                 }
//             });
//         } else {
//             console.log('User already signed-in Firebase.');
//         }
//     });
// }


// const isUserEqual = (googleUser, firebaseUser) => {
//     if (firebaseUser) {
//         const providerData = firebaseUser.providerData;

//         for (let i = 0; i < providerData.length; i++) {
//         if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
//             providerData[i].uid === googleUser.getBasicProfile().getId()) {
//             // We don't need to reauth the Firebase connection.
//             return true;
//         }
//         }
//     }
//     return false;
// }


// const handleSignOut = () => {
//     const googleAuth = gapi.auth2.getAuthInstance();

//     googleAuth
//         .signOut()
//         .then(() => firebase.auth().signOut());
// }
  



export default googleSignIn;