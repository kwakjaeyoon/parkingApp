const firebase= require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyCIOU-E8JVVfCoIKBcmN8FYIHRgyqDRV3E",
    authDomain: "parkingapp-217e0.firebaseapp.com",
    databaseURL: "https://parkingapp-217e0-default-rtdb.firebaseio.com",
    projectId: "parkingapp-217e0",
    storageBucket: "parkingapp-217e0.appspot.com",
    messagingSenderId: "752802482331",
    appId: "1:752802482331:web:dcfd5674920937f25e1e3e",
    measurementId: "G-6X5EXZ6PMH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
let database = firebase.database();

module.exports = database;