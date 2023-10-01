// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHZOZfkfcew4jfsKUlJeXMC6cNtU13sI",
  authDomain: "auth-moha-milon-3ec93.firebaseapp.com",
  projectId: "auth-moha-milon-3ec93",
  storageBucket: "auth-moha-milon-3ec93.appspot.com",
  messagingSenderId: "636262664035",
  appId: "1:636262664035:web:81b628793d3688fef4f556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
