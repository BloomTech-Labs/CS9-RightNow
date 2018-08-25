import { db, auth } from "./firebase";


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
    await db
      .collection(col)
      .doc(data.uid)
      .set(data)
      .catch(err => console.log("error adding doc to customer db", err));
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


export const createNewBusiness = data => {
  db.collection("busn_ACTUAL")
    .add(data)
    .then(info => console.log("created a new business :)", info))
    .catch(err => console.log("error :(", err));
}
