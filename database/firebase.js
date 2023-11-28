// const { initializeApp } = require('firebase-admin/app');

// const app = initializeApp();

var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://puzzeul-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.database();

module.exports = db;
