const functions = require('firebase-functions');
const admin = require("firebase-admin");


// define primary collection pasths
const APPT = "_appointment_";
const BUSNINESS = "_business_";
const CUSTOMER = "_customer_";


// initialize admin app instance 
admin.initializeApp();


// initialize administrative services
const db = admin.firestore();


// include timestamps in document requests
db.settings({ timestampsInSnapshots: true });


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

import express from "express";

const app = express();

app.use(express.json());



// GET CUSTOMERS BY ID
app.get("/customer/:id", (req, res) => {
  db
    .collection(CUSTOMER)
    .doc(req.params.id)
    .get()
    .then(snapShot => res.send(snapShot.data()))
    .catch(err => res.send(err));
});


// GET BUSINESSES BY ID
app.get("/business/:id", (req, res) => {
  db
    .collection(BUSNINESS)
    .doc(req.params.id)
    .get()
    .then(snapShot => res.send(snapShot.data()))
    .catch(err => res.status(500).send(err));
});


// GET APPOINTMENTS BY ID
app.get("/appointment/:id", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .get()
    .then(snapShot => res.send(snapShot.data()))
    .catch(err => res.status(500).send(err));
});



export const haveAsesh = functions.https.onRequest(app);



/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  */



exports.getAllFutureAppointments = functions.https.onRequest((req, res) => {
  console.log(req.body)
  db
    .doc(`/${req.body.collection}/future_appointments`)
    .get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.forEach(doc => data.push(doc.data()));
      console.log(data);
      res.json(data);
    })
    .catch(err => res.send(`ERROR - ${err}`));
})



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

  WARNING -- this function's logic is based on the following appointment data structure

        appointment = {
          active: boolean,
          details: {},
          business_ref: ID,
          customer_ref: ID
        }
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

  WARNING -- this function's logic is based on the following appointment data structure

        appointment = {
          active: boolean,
          details: {},
          business_ref: ID,
          customer_ref: ID
        }
*/
exports.handleDeleteAppointment = functions.firestore
  .document(`/appt_test/{apptId}`)
  .onDelete((snap, context) => {
    const isActive = snap.data().active;
    const businessRef = snap.data().business_ref; // NOT a reference - logic is based on this being an id for testing purposes
    const db = admin.firestore();

    db.settings({ timestampsInSnapshots: true });

    db
      .doc(`business_test/${businessRef}/${isActive ? "future_appointments" : "past_appointments"}/${context.params.apptId}`)
      .delete()
      .then(() => console.log("success"))
      .catch(err => console.log("error", err));
  });




/*
  customer confirms appointment
*/
// exports.customerConfirmsAppointment = functions.firebase
//   .document(``)



  // module.exports = {
  //   sesho_routes,
  //   handleNewAppointment,
  //   handleDeleteAppointment
  // }