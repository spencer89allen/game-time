  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD50m9Rl_8bjjD51ZieDMM9cb082lruHZE",
    authDomain: "game-time-f20d3.firebaseapp.com",
    databaseURL: "https://game-time-f20d3.firebaseio.com",
    projectId: "game-time-f20d3",
    storageBucket: "game-time-f20d3.appspot.com",
    messagingSenderId: "1087769147134",
    appId: "1:1087769147134:web:7349886a00562d4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore().settings({ timestampsInSnapshots: true })
  // ^ this is an update in the firebase library which changes how firebase worked with timestamp  apparently its no longer needed

  export default firebase;