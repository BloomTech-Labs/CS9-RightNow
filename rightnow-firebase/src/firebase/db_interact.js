import { db, auth } from "./firebase";



/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
~ ~ ~ ~ ~ ~ ~ ~ ~ DO NOT USE THIS FILE ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
~ ~ ~ ~ ~ ~ ~ REFER TO FUNCTIONS DIRECTORY ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */




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
                    \
                     \
                     customers = {
                       first_name: string,
                       las_name: string,
                       email: string,

                       past_appointments: [],

                       future_appointments: []
                     }


    bookies -- stores a collections of business docs (one doc = one business)
              \
               \
              business -- stores business information
                * business details -- object -- name, address, phone, rating, photos, hours
                * owner details -- object -- name, email, phone
                * available appointments -- collection of id references to corresponding appointments
                * booked appointments -- collection of id references to corresponding appointments
                     \
                      \
                      businesses = {
                        business_info: {
                          name: string,
                          phone: string,
                          rating: number,
  
                          street_number: string,
                          street_name: string,
                          city: string,
                          state: string,
                          zip: string

                          photos: [],
                          hours: unknown
                        },

                        owner_info: {
                          first_name: string,
                          last_name: string,
                          email: string
                          phone: string
                        },

                        available_appointments: [],

                        booked_appointments: []
                      }
    
    
    appointments -- stores a collection of ALL appointments (ever?)
                \
                 \
                appointment -- stores appointment details
                  * active -- boolean -- true for future appointment - false for past appointment
                  * details -- object -- business name, address, time, cost, type
                  * business host -- reference -- ref to business id
                  * customer -- reference -- ref to customer id
                      \
                       \
                       appointment = {
                         active: boolean,
                         business_ref: reference,
                         customer_ref: reference,

                         details: {
                           type: string,
                           time: string,
                           cost: string
                         }
                       }

~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

  To-Do:

    * how are we going to allow users to browse appointments by industry?
    
        * key words from places api ?
        * make business declare the type of industry?
        * something else?


    * (DONE) added newly created appointment id to corresponding business' collection of future_appointments


    * (DONE) method that adds customer id to appointment's customerId field upon confirmation


    * (DONE) option for businesses to delete an appointment 
  
        * i'm thinking we stay away from "updating" appointments

        * if there is misleading information on an appointment card then it should be removed immediately

        * ex. while the owner is trying to update something, 
          a user could already be planning parts of their day around the current advertisement


    * once the current time is equal to the appointment time (for open appointments), the appointment should expire

        * set active field to false and delete appointment from database
    
  
    * (DONE) get all future appointments for current user (customer or business)
    

    * (DONE) get all past appointments for current user (customer or business)
 

    * (DONE) convert es6 methods to firebase functions

  
    * (DONE) onUpdate trigger for when user confirms appointment

        * updates corresponding business

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
  // @param data -- object -- any data you want to store
  // @param businessId -- string -- business id 
export const createNewAppointment = async (data, businessId) => {
  const errorMsg = "error creating new appointment\n";

  if (!businessId) {
    console.log("you must provide a business id for future reference");
    return;
  }

  const businessRef = await db.collection("busn_ACTUAL").doc(businessId);

  const dataWithRef = { ...data, business_ref: businessRef };

  console.log(dataWithRef)

  const appointmentRef = 
    await db
      .collection("appt_ACTUAL")
      .add(dataWithRef)
      .then(docRef => docRef) // returns document reference
      .catch(err => console.log(errorMsg, err));
  
  const updateBusiness = await newFutureAppointment(businessRef, appointmentRef);

  return updateBusiness;
}


// adds new appointment reference to the future_appointments collection for a specified business
// returns the document reference of the newly created entry
  // @param businessRef -- string -- the location of the business to be updated
  // @param appointmentRef -- string -- the location of the newly created appointment
export const newFutureAppointment = async (businessRef, appointmentRef) => {
  const applyUpdate =
    await businessRef
      .collection("future_appointments")
      .add({ appointment_ref: appointmentRef })
      .then(docRef => docRef) // returns document reference
      .catch(err => console.log("error adding new appointment", err));
  
  return applyUpdate;
}


// when a customer confirms an appointment, the customer id will be added to the appointment doc
// returns undefined -- firestore update method does not return anything
  // @param customerId -- string -- document id of the customer confirming the appointment
  // @param appointmentId -- string -- document id of the appointment being booked
export const customerConfirmsAppt = async (customerId, appointmentId) => {
  const ref = await db.collection("appt_ACTUAL").doc(appointmentId);

  const updateRef = 
    await ref
      .update({ customer_id: customerId })
      .then(() => console.log("funds secured"))
      .catch(err => console.log("error booking appointment", err));

  return updateRef;
}


export const deleteAppointment = async appointmentId => {
  const batch = db.batch();

  const appointmentRef = await db.collection("appt_ACTUAL").doc(appointmentId);


  // const businessRef = await 
  
  const ref =
    await db
      .collection("appt_ACTUAL")
      .doc(appointmentId)
      .delete()
      .then(() => console.log(`appointment ${appointmentId} successfully deleted`))
      .catch(err => console.log("error deleting appointment", err));

  return ref;
}

// 012YFwRHCAjyTAqmg3ed
