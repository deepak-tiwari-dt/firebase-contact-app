// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ueud32gqxI7HMoZZKvAxw43xNcV3KuM",
  authDomain: "vite-contact-11a51.firebaseapp.com",
  projectId: "vite-contact-11a51",
  storageBucket: "vite-contact-11a51.appspot.com",
  messagingSenderId: "296121438763",
  appId: "1:296121438763:web:a8e4d4e3b428b61732d06e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);