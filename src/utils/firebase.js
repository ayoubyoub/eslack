import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyDdRxBA-VBXEa0zm7A_x4GYUb-u5UIhe1Y",
  authDomain: "quickstart-1553958420600.firebaseapp.com",
  databaseURL: "https://quickstart-1553958420600.firebaseio.com",
  projectId: "quickstart-1553958420600",
  storageBucket: "quickstart-1553958420600.appspot.com",
  messagingSenderId: "832947999043",
  appId: "1:832947999043:web:b6aa4e3fa2da16de1b1ff6",
  measurementId: "G-E64ZF7RP9K"
};
firebase.initializeApp(config);

export default firebase;
