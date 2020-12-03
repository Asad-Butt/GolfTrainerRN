import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBwG-NY6FDN9Q8OGTeL7Qb0cc-dE05bFps",
  authDomain: "golf-trainer.firebaseapp.com",
  databaseURL: "https://golf-trainer.firebaseio.com",
  projectId: "golf-trainer",
  storageBucket: "golf-trainer.appspot.com",
  messagingSenderId: "316778313799",
  appId: "1:316778313799:web:6c54ba577a72744a015962",
  measurementId: "G-BVKEJB4VXF",
};

//export Initialization
export default firebase.initializeApp(firebaseConfig);
