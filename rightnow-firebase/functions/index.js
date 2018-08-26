const functions = require('firebase-functions');
const admin = require("firebase-admin");


// initialize admin app instance from which realtime db changes can be made
admin.initializeApp();


// realtime database functions
// functions.https.onRequest((req, res) => {})
// functions.database.ref("...")

// firestore functions
// functions.firestore.document("/path/here")
// onCreate, on Update, onDelete, onWrite