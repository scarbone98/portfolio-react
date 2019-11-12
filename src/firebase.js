import firebase from 'firebase'

const settings = {timestampsInSnapshots: true};
let firebaseConfig = {
    apiKey: "AIzaSyDULbh758S11z_1gMiJan1tW8zB9-piMYk",
    authDomain: "porfolio-database.firebaseapp.com",
    databaseURL: "https://porfolio-database.firebaseio.com",
    projectId: "porfolio-database",
    storageBucket: "porfolio-database.appspot.com",
    messagingSenderId: "383004397744",
    appId: "1:383004397744:web:c39fe2ed2898497abbab75",
    measurementId: "G-9CSRPDWX09"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
firebase.analytics();

export default firebase;