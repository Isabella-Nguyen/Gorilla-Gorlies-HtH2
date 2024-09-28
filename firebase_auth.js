// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw4IoN187SyLTZXhn96w8CLDeWt4C56y8",
  authDomain: "gorilla-gorlies.firebaseapp.com",
  projectId: "gorilla-gorlies",
  storageBucket: "gorilla-gorlies.appspot.com",
  messagingSenderId: "304225891518",
  appId: "1:304225891518:web:492ee9ea770cbb30485aef",
  measurementId: "G-BKKR0ZV2D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);