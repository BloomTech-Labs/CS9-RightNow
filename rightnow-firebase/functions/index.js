const functions = require('firebase-functions');
const admin = require("firebase-admin");


// initialize admin app instance from which realtime db changes can be made
admin.initializeApp();


/*
  Notes: 

    functions.firestore.document()


    @param snap = query document snapshot

      * snap.ref = reference
      * snap.data() = data that triggered the event
    

    @param context = basic infor about the triggered event

      * .params -- object of wildcard key-value pairs

*/




/*
  When a new appointment is added to the appointments collection,
  this method will be triggered and the appointment reference
  will be added to the corresponding business' future_appointments
  collection.

  @returns document reference to the new future_appointments doc
*/

exports.handleNewAppointment = functions.firestore
  .document(`/appt_test/{apptId}`)
  .onCreate((snap, context) => {
    const appointmentRef = snap.ref;
    const businessRef = snap.data().business_ref; // id for testing

    const db = admin.firestore();

    db
      .doc(`/business_test/${businessRef}`)
      .collection("future_appointments")
      .add({ appointment_ref: appointmentRef })
      .then(busnDocRef => busnDocRef)
      .catch(err => console.log("error", err));
  });