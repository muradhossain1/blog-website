// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwSp1hJxX0hJUNej50icdyu2ZWmpCncWk",
  authDomain: "my-assignment-11-73142.firebaseapp.com",
  projectId: "my-assignment-11-73142",
  storageBucket: "my-assignment-11-73142.firebasestorage.app",
  messagingSenderId: "771235734151",
  appId: "1:771235734151:web:80e019d660e22884b0ce22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

