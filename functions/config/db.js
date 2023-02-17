const admin = require("firebase-admin");
const serviceAccount = require("./firebase-adminsdk.json");

exports.initDb = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://delve-a015a-default-rtdb.firebaseio.com/",
});
