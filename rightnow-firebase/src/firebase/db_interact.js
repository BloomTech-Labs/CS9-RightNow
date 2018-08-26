import { db, auth } from "./firebase";


/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  Known bugs:

    * If a user's login habbits varry across multiple services, 
      a new account will be created in the db for each service.

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  Database structure:

    bookers -- stores a collection of customer docs
         \
          \
          customer -- stores user information 
            * name, email, phone, uid 
            * past appointments -- collection of id references to appointments attended in the past
            * future appointments -- collection of id references to future appointments


    bookies -- stores a collections of business docs (one doc = one business)
              \
               \
              business -- stores business information
                * business details -- object -- name, address, phone, rating, photos, hours
                * owner details -- object -- name, email, phone
                * available appointments -- collection of id references to corresponding appointments
                * booked appointments -- collection of id references to corresponding appointments
    
    
    appointments -- stores a collection of ALL appointments (ever?)
                \
                 \
                appointment -- stores appointment details
                  * active -- boolean -- true for future appointment - false for past appointment
                  * details -- object -- business name, address, time, cost, type
                  * business host -- reference -- ref to business id
                  * customer -- reference -- ref to customer id

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  To-Do:

    * how are we going to allow users to browse appointments by industry?
    
        * key words from places api ?
        * make business declare the type of industry?
        * something else?


    * (DONE) added newly created appointment id to corresponding business' collection of future_appointments


    * method that adds customer id to appointment's customerId field upon confirmation


    * option for businesses to delete an appointment 
  
        * i'm thinking we stay away from "updating" appointments

        * if there is misleading information on an appointment card then it should be removed immediately

        * ex. while the owner is trying to update something, 
          a user could already be planning parts of their day around the current advertisement


    * once the current time is equal to the appointment time (for open appointments), the appointment should expire

        * set active field to false and delete appointment from database
    
  
    * get all future appointments for current user (customer or business)
    * get all past appointments for current user (customer or business)

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


// returns the user id of the user that is currently logged in
export const getUserId = async () => {
  const id = await auth.currentUser.uid;
  return id;
}


// find business or customer by document id
  // @param col - string - "users_ACTUAL" or "busn_ACTUAL"
  // @param id  - string - some id
export const findUserById = async (col, id) => {
  const errorMsg = `error locating customer/business in database\nprovided collection parameter: ${col}\nprovided id: ${id}`;

  const ref = await db.collection(col);
  const data = 
    await ref
      .doc(id)
      .get()
      .then(doc => doc.data())
      .catch(err => console.log(errorMsg, err));

  return data;
}


// returns an array of documents that contain the specified params
  // @param col - string - "users_ACTUAL" or "busn_ACTUAL"
  // @param field - string - any available field in the document
  // @param value - any - the desired value of the field
export const findUserByField = async (col, field, value) => {
  const errorMsg = `error locating user in collection \n\t ${col} \nwith data \n\t { ${field}: ${value} }\n\n`;

  const ref = await db.collection(col);
  const query = await ref.where(field, "==", value);
  const data = 
    await query
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
      .catch(err => console.log(errorMsg, err));

  return data;
}


// adds a new document to the users/businesses collection with the user id (uid) as the document id
// returns undefined
  // @param col - string - "users_ACTUAL" or "busn_ACTUAL"
  // @param data - object - any data you wish to store - UID IS REQUIRED
export const createUser = async (col, data) => {
  const freshUser = 
    await db
      .collection(col)
      .doc(data.uid)
      .set(data)
      .catch(err => console.log("error adding doc to customer db", err));
  
  return freshUser;
}


// checks to see if the customer alread has an account
// if they do, the account data is returned
// if they don't, a new database doc is created with the user id (uid) as the doc id
  // @param col - string - "users_ACTUAL" or "busn_ACTUAL"
  // @params data - object - any data you wish to store - UID IS REQUIRED
export const registerUser = async (col, data) => {
  const errorMsg = `error registering new customer with the following provided data\n\t${data}`;

  const ref = await db.collection(col);
  const response = 
    await ref
      .doc(data.uid)
      .get()
      .then(doc => !doc.exists ? createUser(col, data) : doc.data())
      .catch(err => console.log(errorMsg, err));
  
  return response;
}


// creates a new appointment and updates the business' future_appointments collection
// returns the document id of the newly added appointment in the business' future_appointments collection
  // @param data -- object -- any data you want to store -- MUST INCLUDE BUSINESS ID and ACTIVE: TRUE
export const createNewAppointment = async data => {
  const errorMsg = "error creating new appointment\n";

  if (!data.businessId) {
    console.log("you must provide a business id for future reference");
    return;
  }

  const newAppointmentId = 
    await db
      .collection("appt_ACTUAL")
      .add(data)
      .then(docRef => docRef.id)
      .catch(err => console.log(errorMsg, err));
  
  const updateBusiness = await newFutureAppointment(data.businessId, newAppointmentId);

  return updateBusiness;
}


// adds new appointment to the future_appointments collection for a specified business
// returns the document id of the newly created entry
  // @param busnID -- string -- the doc id of the business to be updated
  // @param apptID -- string -- the doc id of the newly created appointment
export const newFutureAppointment = async (busnID, apptID) => {
  const ref = await db.collection("busn_ACTUAL");

  const applyUpdate =
    await ref
      .doc(busnID)
      .collection("future_appointments")
      .add({ appointment_id: apptID })
      .then(docRef => docRef.id)
      .catch(err => console.log("error adding new appointment", err));
  
  return applyUpdate;
}