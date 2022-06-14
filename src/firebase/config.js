import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGNYDmPOoHMz25LyoOSI4W-lov11bkLCQ",
    authDomain: "fir-f6a1f.firebaseapp.com",
    projectId: "fir-f6a1f",
    storageBucket: "fir-f6a1f.appspot.com",
    messagingSenderId: "58032222875",
    appId: "1:58032222875:web:c58426e130cdbd94558c3e",
    measurementId: "G-6DWSV2DPH8"
  };

export default  firebase.initializeApp(firebaseConfig)
