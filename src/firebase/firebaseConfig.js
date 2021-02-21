import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYfBe8-5bULCDN4hewRNLg6UM0g1DNIDo",
    authDomain: "reactnativefirebase-44b25.firebaseapp.com",
    databaseURL:
        "https://reactnativefirebase-44b25-default-rtdb.firebaseio.com",
    projectId: "reactnativefirebase-44b25",
    storageBucket: "reactnativefirebase-44b25.appspot.com",
    messagingSenderId: "697024900170",
    appId: "1:697024900170:web:5d7876b036a27f2fc18ab3",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
