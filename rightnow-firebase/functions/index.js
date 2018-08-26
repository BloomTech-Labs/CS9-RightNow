const functions = require('firebase-functions');
const admin = require("firebase-admin");
const express = require("express");


const app = express();


app.get("/", (req, res) => {
  res.send("\n\thello from the serverless express application\n")
});


app.get("/:primaryCollection/:id", async (req, res) => {
  const { primaryCollection, id } = req.params;
  if (!id) throw new Error("no id was provided");

  const user = await db.collection(primaryCollection).doc(id).get();
  if (!user.exists) throw new Error("no user exists with that ID");

  res.json(user.data());
});


const sesho_routes = functions.https.onRequest(app);



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
      * 
  

  Resources: 

    * express and firebase serverless demo 
        * https://medium.com/@alfianlosari/serverless-node-js-rest-api-with-google-cloud-function-firestore-d7b422f58511
      
    * compile with babel to suit node 6.11.5
        * https://codeburst.io/es6-in-cloud-functions-for-firebase-2-415d15205468

*/



// exports.newSesher = functions.https.onRequest((req, res) => {
//   const db = admin.firestore();
//   // db.settings({ timestampsInSnapshots: true });

//   db
//     .collection("users_test")
//     .doc(req.body.uid)
//     .set(req.body)
//     .then(x => res.send("success", x))
//     .catch(err => console.log("error adding new sesher", err));
// });



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

const handleNewAppointment = functions.firestore
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
const handleDeleteAppointment = functions.firestore
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



  module.exports = {
    sesho_routes,
    handleNewAppointment,
    handleDeleteAppointment
  }