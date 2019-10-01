import * as firebase from "firebase/app";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCETeLBss954s1L4Jim460Rxn2XLJw9Txc",
    authDomain: "backoffice-f783c.firebaseapp.com",
    databaseURL: "https://backoffice-f783c.firebaseio.com",
    projectId: "backoffice-f783c",
    storageBucket: "backoffice-f783c.appspot.com",
    messagingSenderId: "893159634258",
    appId: "1:893159634258:web:64dbaf71f713402f22368b",
    measurementId: "G-4H7600ZZQL"
};

firebase.initializeApp(firebaseConfig);




export default firebase;
