// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzo9BZTNIulCKNil2SZeEp48jkSobaUg",
  authDomain: "coffee-premium.firebaseapp.com",
  projectId: "coffee-premium",
  storageBucket: "coffee-premium.appspot.com",
  messagingSenderId: "592745692575",
  appId: "1:592745692575:web:012e2af8131fd1996e51aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);