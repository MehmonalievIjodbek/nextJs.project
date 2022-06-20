import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXu_qniLDWbX07KuOtLITTY71uX3eF0TE",
    authDomain: "teslaclone-213af.firebaseapp.com",
    projectId: "teslaclone-213af",
    storageBucket: "teslaclone-213af.appspot.com",
    messagingSenderId: "1063078980152",
    appId: "1:1063078980152:web:a93c8687ba6ddac89194cd",
    measurementId: "G-1HPGSVWMSS"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;