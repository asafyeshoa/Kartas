import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyBm6natbBGAvxdYnRfxbJZh1TG-ApHtJLE",
  authDomain: "kartas-app.firebaseapp.com",
  databaseURL: "https://kartas-app-default-rtdb.firebaseio.com",
  projectId: "kartas-app",
  storageBucket: "kartas-app.appspot.com",
  messagingSenderId: "600236946737",
  appId: "1:600236946737:web:ee0fe0c23d50c2dd442c10",
  measurementId: "G-KECWMRTEXP"
}
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
let firebaseFS = firebaseApp.firestore()

export {firebaseAuth, firebaseDb, firebaseFS}
