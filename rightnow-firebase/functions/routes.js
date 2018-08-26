import { Router } from "express";
import admin from "firebase-admin";


admin.initializeApp();


const db = admin.firestore();


const router = Router();


// get user by id
// returns user information
router.get("/:primaryCollection/:id", async (req, res) => {
  const { primaryCollection, id } = req.params;
  if (!id) throw new Error("no id was provided");

  const user = await db.collection(primaryCollection).doc(id).get();
  if (!user.exists) throw new Error("no user exists with that ID");

  res.json(user.data());
});


export default router;



// router.get("/business/:id", async (req, res) => {
//   const { id } = req.params;
  
// })