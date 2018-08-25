import db from "./firebase";


export const createNewBusiness = data => {
  db.collection("busn_ACTUAL")
    .add(data)
    .then(info => console.log("created a new business :)", info))
    .catch(err => console.log("error :(", err));
}