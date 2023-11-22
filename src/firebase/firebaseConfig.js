// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8niOKVahUG8ox348Bz7lGejC9KIZ1olg",
  authDomain: "redeamerica-hackaton.firebaseapp.com",
  projectId: "redeamerica-hackaton",
  storageBucket: "redeamerica-hackaton.appspot.com",
  messagingSenderId: "654773000813",
  appId: "1:654773000813:web:18caa3f40e8e6ea5603d64",
  measurementId: "G-XF54D73SEW"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp)
export const firebaseStorage = getStorage(firebaseApp)
const analytics = getAnalytics(app);