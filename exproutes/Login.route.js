const express = require('express');
const app = express();
const LoginRoutes = express.Router();
// const { fb } = require('../firebase') 

const firebase = require("firebase")
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src='https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js'></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
var firebaseConfig = {
  apiKey: 'AIzaSyDrWKLkH2ZDIldE0mp-Wwmplc38smqkQ5Y',
  authDomain: 'engineeringrsu-transfet-credit.firebaseapp.com',
  databaseURL: 'https://engineeringrsu-transfet-credit.firebaseio.com',
  projectId: 'engineeringrsu-transfet-credit',
  storageBucket: 'engineeringrsu-transfet-credit.appspot.com',
  messagingSenderId: '1006677879863',
  appId: '1:1006677879863:web:375a6e95a8b1958dc9a3b2'
}
// Initialize Firebase
fb = firebase.initializeApp(firebaseConfig)




// const Ticket = require('../models/Login');

 LoginRoutes.route('/').get(function (req, res) {
  const db = fb.firestore()
  let citiesRef = db.collection('cities');
let allCities = citiesRef.get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      if (doc) {
        console.log("Document data:", doc.data());
        return res(doc)
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        res.status(400).json({'meassage': 'else err'})
    }
})

    })
  })
//   var docRef = db.collection("users").doc();
//   docRef.get().then(function(doc) {
      
//   console.log('LoginRoutes.route >>>...Login../')
//    Ticket.find(function (err, Login){
//      if(err){
//        console.log(err);
//      }
//      else {
//        res.json(Login);
//      }
//    });
//  });
 
  module.exports = LoginRoutes;