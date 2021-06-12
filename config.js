import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAPm9nZVIZ1HwU_FzrUwKdB-SomQoPmuE4",
  authDomain: "barter-app-ed9d3.firebaseapp.com",
  projectId: "barter-app-ed9d3",
  storageBucket: "barter-app-ed9d3.appspot.com",
  messagingSenderId: "341208195810",
  appId: "1:341208195810:web:daa32db188b8843c61b4bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();