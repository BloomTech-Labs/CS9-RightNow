const functions = require('firebase-functions');
const admin = require("firebase-admin");


// initialize admin app instance from which realtime db changes can be made
admin.initializeApp();



/*
  Notes: 

    functions.firestore.document()


    @param snap -- query document snapshot

      * snap.ref -- reference
      * snap.data() -- data that triggered the event
    

    @param context -- basic infor about the triggered event

      * .params -- object of wildcard key-value pairs

*/




/*
  When a new appointment is added to the appointments collection,
  this method will be triggered and the appointment reference
  will be added to the corresponding business' future_appointments
  collection.

  @returns document reference to the new future_appointments doc

  @logic
    1. business submits new appointment that follows appointment data structure outline
    2. function gets triggered
    3. function adds a new document to the business' future_appointments collection
        -- the id of the new document is the same id as it is in the appointments primary collection
    4. function returns a document reference to the newly added appointment 
        -- not sure if the client can gain access
*/

exports.handleNewAppointment = functions.firestore
  .document(`/appt_test/{apptId}`)
  .onCreate((snap, context) => {
    const appointmentRef = snap.ref;
    const businessRef = snap.data().business_ref; // id for testing
    const db = admin.firestore();

    db.settings({ timestampsInSnapshots: true });

    db
      .doc(`/business_test/${businessRef}`)
      .collection("future_appointments")
      .doc(context.params.apptId)
      .set({ appointment_ref: appointmentRef })
      .then(busnDocRef => busnDocRef)
      .catch(err => console.log("error", err));
  });



/*
  When an appointment gets deleted by a business, this method will search for identical
  references in the business' future_appointments or past_appointments collection, depending
  on the value of the appointment's `active` property.

  @returns nothing
*/
exports.handleDeleteAppointment = functions.firestore
  .document(`/appt_test/{apptId}`)
  .onDelete((snap, context) => {
    const isActive = snap.data().active;
    const businessRef = snap.data().business_ref;
    const db = admin.firestore();

    db.settings({ timestampsInSnapshots: true });

    db
      .doc(`business_test/${businessRef}/${isActive ? "future_appointments" : "past_appointments"}/${context.params.apptId}`)
      .delete()
      .then(() => console.log("success"))
      .catch(err => console.log("error", err));
  });