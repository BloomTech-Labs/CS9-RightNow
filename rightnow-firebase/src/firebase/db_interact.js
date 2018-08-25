import { db, auth } from "./firebase";


// find business or customer by document id
  // @param col - string - "users_ACTUAL" or "busn_ACTUAL"
  // @param id  - string - some id
export const findUserById = async (col, id) => {
  const ref = await db.collection(col);
  const data = 
    await ref
      .doc(id)
      .get()
      .then(doc => doc.data())
      .catch(err => console.log(`error locating customer/business in database\nprovided collection parameter: ${col}\nprovided id: ${id}`, err));

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


export const createNewBusiness = data => {
  db.collection("busn_ACTUAL")
    .add(data)
    .then(info => console.log("created a new business :)", info))
    .catch(err => console.log("error :(", err));
}


// export const handleLogin = value => {
//   auth.onAuthStateChanged(currentUser => {
//     console.log("google login - current user", currentUser);
    // value.updateState({
    //     id: currentUser.uid || "",
    //     name: currentUser.displayName || "",
    //     email: currentUser.email || "",
    //     phone: currentUser.phoneNumber || "",
    //     photo: currentUser.photoURL || ""
    // });
// });
// }