import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyCZtM73_XYWXBrQpH7xK6mL6xAaY3Jh5Hs",
   authDomain: "timreactblog.firebaseapp.com",
   databaseURL: "https://timreactblog.firebaseio.com",
   projectId: "timreactblog",
   storageBucket: "",
   messagingSenderId: "232116069867"
};
firebase.initializeApp(config);
let firestore = firebase.firestore();

const settings = {timestamplnSnapshots: true};
firestore.settings(settings);

export default firebase;