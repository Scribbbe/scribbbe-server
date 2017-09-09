import * as functions from "firebase-functions";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

export let helloWord = functions.https.onRequest((req, res) => {
  let world = `from Es6 in Cloud Functions!`
  res.status(200).send(`Hello ${world}`)
});
