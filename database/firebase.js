// const { initializeApp } = require('firebase-admin/app');

// const app = initializeApp();

// You should use .env instead of parsing a json service account, it will be better to handle services variable and be more secure than storing a plain file

var admin = require("firebase-admin");

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://puzzeul-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.database();

module.exports = db;
