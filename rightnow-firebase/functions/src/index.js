  /* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~/ 
 / ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ INITIALIZE FIRESTORE FUNCTIONS ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  /
/~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

// define primary collection paths
const APPT = "_appointment_";
const BUSNINESS = "_business_";
const CUSTOMER = "_customer_";


// initialize admin app instance 
admin.initializeApp();


// initialize administrative services
const db = admin.firestore();


// include timestamps in document requests
db.settings({ timestampsInSnapshots: true });


  /* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~/ 
 / ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ FIRESTORE CRUD FUNCTIONS ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  /
/~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


import express from "express";

const app = express();

app.use(express.json());


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// CREATE APPOINTMENT
app.post("/appointment", (req, res) => {
  db
    .collection(APPT)
    .add(req.body)
    .then(docRef => res.send(docRef))
    .catch(err => res.send(err));
});


// CREATE BUSINESS
app.post("/business", (req, res) => {
  db
    .collection(BUSNINESS)
    .doc(req.body.uid)
    .set(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send(err));
});


// CREATE CUSTOMER
app.post("/customer", (req, res) => {
  db
    .collection(CUSTOMER)
    .doc(req.body.uid)
    .set(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send(err))
});


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// MIDDLEWARE -- DETERMINE PRIMARY COLLECTION 
const forwardCollection = (req, res, next) => {
  const primary = req.params.primary;
  let collection;

  if (primary === "appointment") collection = APPT;
  if (primary === "business") collection = BUSNINESS;
  if (primary === "customer") collection = CUSTOMER;

  res.locals.primaryCollection = collection;
  next();
}


// GET CUSTOMER / BUSINESS / APPOINTMENT BY ID
app.get("/:primary/:id", forwardCollection, (req, res) => {
  db
    .collection(res.locals.primaryCollection)
    .doc(req.params.id)
    .get()
    .then(docSnapshot => res.send(docSnapshot.data()))
    .catch(err => res.send(err));
});


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// GET FUTURE APPOINTMENTS FOR CUSTOMER OR BUSINESS
app.get("/:primary/:id/upcoming", async (req, res) => {
  const primary = req.params.primary === "business" ? BUSNINESS : CUSTOMER;

  const futureAppointments = 
    await db
      .collection(primary)
      .doc(req.params.id)
      .collection("future_appointments")
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
      .catch(err => res.send(err));

  res.send(futureAppointments);
});


// GET PAST APPOINTMENTS FOR CUSTOMER OR BUSINESS
app.get("/:primary/:id/past", (req, res) => {
  const primary = req.params.primary === "business" ? BUSNINESS : CUSTOMER;

  const pastAppointments = 
    await db
      .collection(primary)
      .doc(req.params.id)
      .collection("past_appointments")
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
      .catch(err => res.send(err));

  res.send(pastAppointments);
})


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// DELETE APPOINTMENT
app.delete("/appointment/:id", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .delete()
    .then(() => res.send("success"))
    .catch(err => res.send("error"));
});


// CONFIRM APPOINTMENT
app.put("/appointment/:id/confirm", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .update({ customer_ref: req.body.customerRef })
    .then(() => res.send("success"))
    .catch(err => res.send("error"));
});


export const haveAsesh = functions.https.onRequest(app);



  /* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~/ 
 / ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ FIRESTORE EVENT TRIGGERS ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  /
/~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ UNCERTAIN OF THIS SECTION'S FUNCTIONALITY ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


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
export const handleNewAppointment = functions.firestore
  .document(`/${APPT}/{apptId}`)
  .onCreate((snap, context) => {
    const appointmentRef = snap.ref;
    const businessRef = snap.data().business_ref; // id for testing

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
export const handleDeleteAppointment = functions.firestore
  .document(`/${APPT}/{apptId}`)
  .onDelete((snap, context) => {
    const isActive = snap.data().active;
    const businessRef = snap.data().business_ref; // NOT a reference - logic is based on this being an id for testing purposes

    db
      .doc(`${BUSNINESS}/${businessRef}/${isActive ? "future_appointments" : "past_appointments"}/${context.params.apptId}`)
      .delete()
      .then(() => console.log("success"))
      .catch(err => console.log("error", err));
  });