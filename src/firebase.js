import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2Qpr6V0mcqL8KFTfowhd-HsbEulyu3ok",
  authDomain: "todo-app-cp-dcd53.firebaseapp.com",
  databaseURL: "https://todo-app-cp-dcd53.firebaseio.com",
  projectId: "todo-app-cp-dcd53",
  storageBucket: "todo-app-cp-dcd53.appspot.com",
  messagingSenderId: "472986568598",
  appId: "1:472986568598:web:54110ac90eb4cc198bbfb7",
  measurementId: "G-GW6VB1Z7W7",
});

const db = firebaseApp.firestore();

export default db;
