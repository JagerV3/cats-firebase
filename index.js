var admin = require("firebase-admin");

var serviceAccount = require ("./secret-key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaeURL: "https://<DATABASE_NAME>.firebaseio.com"
});