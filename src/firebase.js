import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpusdxJnCtmEi0d67B9fdjLx2zMszBjkg",
    authDomain: "netflix-clone-b7a60.firebaseapp.com",
    projectId: "netflix-clone-b7a60",
    storageBucket: "netflix-clone-b7a60.appspot.com",
    messagingSenderId: "70061680097",
    appId: "1:70061680097:web:a0bf7671bb5ae1d9ffdea0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;