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


// CREATE BUSINESS -- working
app.post("/business", (req, res) => {
  db
    .collection(BUSNINESS)
    .doc(req.body.uid)
    .set(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send(err));
});


// GET BUSINESS BY ID -- working
app.get("/business/:id", (req, res) => {
  db
    .collection(BUSNINESS)
    .doc(req.params.id)
    .get()
    .then(docSnapshot => res.send(docSnapshot.data()))
    .catch(err => res.send(err));
});


// UPDATE BUSINESS -- not to be used for updating business appointments collection -- working
app.put("/business/:id", (req, res) => {
  db
    .collection(BUSNINESS)
    .doc(req.params.id)
    .update(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send("error", err));
});


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// CREATE CUSTOMER -- working
app.post("/customer", (req, res) => {
  db
    .collection(CUSTOMER)
    .doc(req.body.uid)
    .set(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send(err))
});


// GET CUSTOMER BY ID -- working
app.get("/customer/:id", (req, res) => {
  db
    .collection(CUSTOMER)
    .doc(req.params.id)
    .get()
    .then(docSnapshot => res.send(docSnapshot.data()))
    .catch(err => res.send(err));
});


// UPDATE CUSTOMER INFORMATION -- not to be used for updating customer appointment collections -- working
app.put("/customer/:id", (req, res) => {
  db
    .collection(CUSTOMER)
    .doc(req.params.id)
    .update(req.body)
    .then(() => res.send("success"))
    .catch(err => res.send("error", err));
});


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// GET APPOINTMENT BY ID -- working
app.get("/appointment/:id", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .get()
    .then(docSnapshot => res.send(docSnapshot.data()))
    .catch(err => res.send(err));
})


// CREATE APPOINTMENT -- working
app.post("/appointment", (req, res) => {
  db
    .collection(APPT)
    .add(req.body)
    .then(docRef => res.send(docRef))
    .catch(err => res.send(err));
});


// DELETE APPOINTMENT -- working
app.delete("/appointment/:id", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .delete()
    .then(() => res.send("success"))
    .catch(err => res.send("error"));
});


// CONFIRM APPOINTMENT -- working
app.put("/appointment/:id/confirm", (req, res) => {
  db
    .collection(APPT)
    .doc(req.params.id)
    .update({ customer_ref: req.body.customerRef })
    .then(() => res.send("success"))
    .catch(err => res.send("error"));
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
app.get("/:primary/:id/past", async (req, res) => {
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
  When a customer confirms an appointment, a put request will update 
  the appointment with customer_ref. When this confirmation occurs,
  this function will remove the corresponding entry from the business'
  available_appointments collection into the book_appointments collection.

  THIS METHOD ASSUMES THAT APPOINTMENTS CAN ONLY BE BOOKED OR DELETED
*/
export const handleUpdateAppointment = functions.firestore
  .document(`/${APPT}/{apptId}`)
  .onUpdate((snap, context) => {
    const businessRef = snap.data().business_ref; // using id for development

    const batch = db.batch();

    const bookedApptsRef = db.doc(`/${BUSNINESS}/${businessRef}`).collection("booked_appointments").doc(context.params.apptId);
    batch.set(bookedApptsRef, snap.data());

    const availApptsRef = db.doc(`${BUSNINESS}/${businessRef}`).collection("available_appointments").doc(context.params.apptId);
    batch.delete(availApptsRef);
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