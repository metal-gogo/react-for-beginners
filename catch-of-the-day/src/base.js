import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2Vdif-BUnQcbTGLEJQPKT6pl2qjoTwfU",
  authDomain: "catch-of-the-day-e8760.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-e8760.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
