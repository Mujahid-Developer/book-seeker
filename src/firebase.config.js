// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArDF3sTqxSgV9wzFy33yzRZTnIauYIkSc",
  authDomain: "book-seeker-8f8b3.firebaseapp.com",
  projectId: "book-seeker-8f8b3",
  storageBucket: "book-seeker-8f8b3.appspot.com",
  messagingSenderId: "809039841744",
  appId: "1:809039841744:web:3788b7169b5fe2bd69d1d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()
